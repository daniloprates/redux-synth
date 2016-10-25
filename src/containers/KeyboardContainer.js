import React, { Component, PropTypes } from 'react';
import { notesMidi } from '../constants/notes';
import { scales } from '../constants/scales';
import Keyboard from '../components/Keyboard';
import { letterToNote } from '../constants/keyboard';
// import midi from '../audio/Midi';

let currentKey;

Array.prototype.each = function(n, cb) {
  let i;
  for (i = 0;i<n;i++) {
    cb.call(this, i);
  }
};

/**
 *
 * SynthKeyboard container
 * handles the mouse, keyboard and midi events
 */
class SynthKeyboard extends Component {

static getKeys(props) {
    const nOfKeys = 12;
    let keys = {}, scale = scales[props.scale], keyIndex;

    [].each(props.octaves, (oct) => {
      [].each(nOfKeys, (i) => {

        keyIndex = (i + (oct * nOfKeys));

        if (scale.indexOf(i) > -1) {

          keys[`className${keyIndex}`] =
            (notesMidi[keyIndex].isSharp) ? 'black-key' : 'white-key' +
            ` is-root-${i === 0}`;
          keys[`octave${keyIndex}`] = oct;
          keys[`active${keyIndex}`] = false;
          keys[`note${keyIndex}`] = (i + props.root) + (nOfKeys * oct);

        }

      });
    });

    return keys;
  }

  constructor(props) {
    super(props);

    /* Bind Keyboard */
    document.onkeydown = this.handleKeyDown.bind(this);
    document.onkeyup = this.handleKeyUp.bind(this);

    /* Bind Midi */
    if (navigator.requestMIDIAccess) {
        navigator.requestMIDIAccess({
            sysex: false
        }).then(this.handleMidiSuccess.bind(this), this.handleMidiError);
    } else {
        console.log("No MIDI support in your browser.");
    }

    this.keyNotes = {};
    this.midiNotes = {};
  }

  /**
   *
   * MOUSE ACTIONS
   *
   */
  handleMouseDown(e) {
    e.persist();
    e.preventDefault ? e.preventDefault() : e.returnValue = false;

    let key = e.target.getAttribute('data-note');
    currentKey = key;
    this.props.onNoteOn(key);

  }
  handleMouseUp(e) {
    e.persist();
    e.preventDefault ? e.preventDefault() : e.returnValue = false;

    let key = e.target.getAttribute('data-note');
    if (!key) {
      this.props.stopPlaying();
    } else {
      this.props.onNoteOff(key);
    }

  }
  handleMouseMove(e) {
    e.persist();
    e.preventDefault ? e.preventDefault() : e.returnValue = false;

    if (!e.buttons) {
      if (Object.keys(this.keyNotes).length) {
        return false;
      } else if (!this.props.global.notes || Object.keys(this.props.global.notes).length) {
        return this.props.stopPlaying();
      }
    }

    let key = e.target.getAttribute('data-note');

    if (!currentKey) {
      currentKey = key;
    }


    if (!!key && (key !== currentKey) && this.props.global.isPlaying) {
      this.props.onNoteOff(currentKey);
      this.props.onNoteOn(key);
      currentKey = key;
    }

  }

  /**
   *
   * KEYBOARD ACTIONS
   *
   */
  handleKeyDown(e) {

    if (!e.metaKey && !e.ctrlKey && !e.shiftKey) {
      let note = letterToNote[e.key] + (12 * this.props.keyboard.octave);

      if (note !== undefined && !isNaN(note) && !this.keyNotes[note]) {
        this.keyNotes[note] = true;
        this.props.onNoteOn(note);
      }
    }

  }
  handleKeyUp(e) {
    let note = letterToNote[e.key] + (12 * this.props.keyboard.octave);

    delete this.keyNotes[note];

    if (note !== undefined && !isNaN(note)) {
      this.props.onNoteOff(note);
    }

  }

  /**
   *
   * MIDI ACTIONS
   *
   */
  handleMidiSuccess(midi) {

    // midi functions
    // when we get a succesful response, run this code
    let inputs = midi.inputs.values();
    // loop over all available inputs and listen for any MIDI input
    for (let input = inputs.next(); input && !input.done; input = inputs.next()) {
        // each time there is a midi message call the onMIDIMessage function
        input.value.onmidimessage = this.handleMidiMessage.bind(this);
    }

  }
  handleMidiMessage(e) {

    let [ channel, note, velocity ] = e.data;

    // It's a music note
    if (channel >= 144 || channel <= 159) {

      channel = channel & 0xf;

      if (velocity === 0 || !!this.midiNotes[note]) {
        this.props.onNoteOff(note, velocity, channel);
        delete this.midiNotes[note];
      } else {
        this.props.onNoteOn(note, velocity, channel);
        this.midiNotes[note] = true;
      }
    }

  }
  handleMidiError(err) {
    console.log("No access to MIDI devices or your browser doesn't support WebMIDI API. Please use WebMIDIAPIShim " + err);
  }

  render() {
    return (
      <div
        onKeyDown={this.handleKeyDown}
        onKeyUp={this.handleKeyUp}
        >
        <Keyboard
          {...this.props}
          onMouseDown={this.handleMouseDown.bind(this)}
          onMouseUp={this.handleMouseUp.bind(this)}
          onMouseMove={this.handleMouseMove.bind(this)}
        />
      </div>
    );
  }
}

SynthKeyboard.propTypes = {
  global: PropTypes.object,
  keyboard: PropTypes.object,
  onNoteOn: PropTypes.func.isRequired,
  onNoteOff: PropTypes.func.isRequired,
  onOctavePrev: PropTypes.func.isRequired,
  onOctaveNext: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool,
  octave: PropTypes.number,
  stopPlaying: PropTypes.func,
};

export default SynthKeyboard;









