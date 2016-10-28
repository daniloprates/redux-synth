import React, { Component, PropTypes } from 'react';
import { notesMidi } from '../constants/notes';
import { scales } from '../constants/scales';
import Keyboard from '../components/Keyboard';
import { letterToNoteChromatic, letterToNoteScales } from '../constants/keyboard';

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

  /**
   *
   * Static methods for the keyboard reducer
   *
   */
  static getKeys(props) {
    let keys = {}, octave, newOctave, scale = scales[props.scale], note, keyIndex, className;
    let nOfKeys = scale.length;

    [].each(props.octaves, (oct) => {
      [].each(nOfKeys, (i) => {

          octave = oct;

          keyIndex = (i + (octave * nOfKeys));

          note = scale[i];
          note = note + props.root;

          if (note >= 12) {
            newOctave = parseInt(note/12);
            note = note - parseInt(12 * newOctave);

            octave = octave + newOctave;

            if (note == 12) {
              note = 0;
            }
          }

          octave = octave + props.octave;

          className = ((notesMidi[note].isSharp) ? 'black-key' : 'white-key') +
            ` is-root-${keyIndex === 0}`;

          note = note + (octave * 12);

          keys[`note${keyIndex}`] = note;
          keys[`octave${keyIndex}`] = octave;
          keys[`active${keyIndex}`] = false;
          keys[`className${keyIndex}`] = className;


        // }

      });
    });
    return keys;
  }

  static getCompKeys(props) {

    let scale = scales[props.scale],
        keyboardOctave = props.octave,
        notes = scale.length,
        compKeysMap = (props.scale) === 'chromatic'
          ? letterToNoteChromatic
          :letterToNoteScales;

    let compKeys = {};
    let compKey, note, octave, newOctaveave;

    for (compKey in compKeysMap) {
      if (compKeysMap.hasOwnProperty(compKey)) {

        note = compKeysMap[compKey][0];
        octave = compKeysMap[compKey][1];

        if (note >= notes) {
          newOctaveave = parseInt(note/notes);
          note = note - parseInt(notes * newOctaveave);
          octave = octave + newOctaveave;

          if (note == notes) {
            note = 0;
          }
        }

        note = scale[note];
        note = (note + (12 * octave)) + (12 * keyboardOctave);
        compKeys[compKey] = note;

      }
    }

    return compKeys;
  }

  /**
   *
   * Instance methods for the Keyboard component
   *
   */
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
        console.warn("No MIDI support in your browser.");
    }

    this.keyNotes = {};
    this.midiNotes = {};
    this.scale = scales[props.keyboard.scale];
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
    if (!key) {
      return false;
    }
    currentKey = key;
    this.props.onNoteOn(key);

  }
  handleMouseUp(e) {
    e.persist();
    e.preventDefault ? e.preventDefault() : e.returnValue = false;

    let target;

    if (e.type === 'touchend') {
      let myLocation = e.changedTouches[0];
      target = document.elementFromPoint(myLocation.clientX, myLocation.clientY) || e.target.getAttribute('data-note');
    } else {
      target = e.target;
    }

    let key = target.getAttribute('data-note');
    if (!key) {
      // this.props.stopPlaying();
    } else {
      this.props.onNoteOff(key);
    }

  }
  handleMouseMove(e) {
    e.persist();
    e.preventDefault ? e.preventDefault() : e.returnValue = false;
        window.e = e;
        window.event = e;

    if (!e.buttons && e.type !== 'touchmove') {
      if (Object.keys(this.keyNotes).length) {
        return false;
      } else if (!this.props.global.notes || Object.keys(this.props.global.notes).length) {
        return this.props.stopPlaying();
      }
    }

    let target;

    if (e.type === 'touchmove') {
      let myLocation = e.changedTouches[0];
      target = document.elementFromPoint(myLocation.clientX, myLocation.clientY) || e.target.getAttribute('data-note');
    } else {
      target = e.target;
    }

    let key = target.getAttribute('data-note');

    if (!key || isNaN(key)) {
      // console.warn('no key', key);
      return false;
    }

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
      let key = this.props.keyboard.compKeys[e.key];

      if (!isNaN(key) && typeof key !== 'undefined' && !this.keyNotes[key]) {
        this.keyNotes[key] = true;
        this.props.onNoteOn(key);
      }
    }
  }
  handleKeyUp(e) {
    let key = this.props.keyboard.compKeys[e.key];

    if (!isNaN(key) && typeof key !== 'undefined') {
      delete this.keyNotes[key];
      this.props.onNoteOff(key);
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
    console.warn("No access to MIDI devices or your browser doesn't support WebMIDI API. Please use WebMIDIAPIShim " + err);
  }

  render() {
    return (
      <div
        onKeyDown={this.handleKeyDown}
        onKeyUp={this.handleKeyUp}
        className="keyboard-container"
        >
        <Keyboard
          {...this.props}

          onMouseDown={this.handleMouseDown.bind(this)}
          onMouseUp={this.handleMouseUp.bind(this)}
          onMouseMove={this.handleMouseMove.bind(this)}
          onTouchStart={this.handleMouseDown.bind(this)}
          onTouchEnd={this.handleMouseUp.bind(this)}
          onTouchMove={this.handleMouseMove.bind(this)}

        />
      </div>
    );
  }
}

SynthKeyboard.propTypes = {
  global: PropTypes.object,
  keyboard: PropTypes.object,
  scale: PropTypes.object,
  onNoteOn: PropTypes.func.isRequired,
  onNoteOff: PropTypes.func.isRequired,
  onOctavePrev: PropTypes.func.isRequired,
  onOctaveNext: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool,
  octave: PropTypes.number,
  stopPlaying: PropTypes.func,
};

export default SynthKeyboard;









