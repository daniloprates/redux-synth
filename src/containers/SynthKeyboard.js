import React, { Component, PropTypes } from 'react';
// import keydown from 'react-keydown';
import Keyboard from '../components/Keyboard';
import { letterToNote } from '../constants/keyboard';

let currentKey;
let currentOctave;
// let currentNote;

/**
 *
 * SynthKeyboard container
 * handles the mouse events
 */

class SynthKeyboard extends Component {
  constructor(props) {
      super(props);

      document.onkeydown = this.handleKeyDown.bind(this);
      document.onkeyup = this.handleKeyUp.bind(this);
  }
  // componentWillReceiveProps(nextProps) {
      // console.log('componentWillReceiveProps KEYBOARD', nextProps);
  // }

  // @keydown( 'enter' )
  handleKeyDown(e) {
    let note = letterToNote[e.key];
    console.log('note', note);
    let oct;

    // if (typeof note == 'string') {
    //   if (note == 'PREV_OCTAVE') {
    //     return this.props.onOctavePrev();
    //   } else if (note == 'NEXT_OCTAVE') {
    //     return this.props.onOctaveNext();
    //   }
    // }

    // if (note == -1) {
    //   note = 11;
    //   oct = this.props.octave - 1;
    // }
    if (note >= 24) {
      note = note - 24;
      oct = this.props.octave + 2;
    }
    if (note >= 12) {
      note = note - 12;
      oct = this.props.octave + 1;
    }
    // console.log('note', note, oct);

    if (note !== undefined) {
      this.props.onNoteOn(note, oct);
    }

  }

  // @keyup( 'enter' )
  handleKeyUp(e) {
    let note = letterToNote[e.key];
    let oct;

    if (note === 'undefined') {
      return false;
    }

    if (note == -1) {
      note = 11;
      oct = this.props.octave - 1;
    }
    if (note >= 24) {
      note = note - 24;
      oct = this.props.octave + 2;
    }
    if (note >= 12) {
      note = note - 12;
      oct = this.props.octave + 1;
    }

    this.props.onNoteOff(note, oct);
      // this.props.stopPlaying(note);
  }

  handleMouseDown(e) {
    e.persist();
    e.preventDefault ? e.preventDefault() : e.returnValue = false;

    let key = e.target.getAttribute('data-note');
    let oct = e.target.getAttribute('data-octave');
    this.props.onNoteOn(key, oct);

  }
  handleMouseUp(e) {
    e.persist();
    e.preventDefault ? e.preventDefault() : e.returnValue = false;

    let key = e.target.getAttribute('data-note');
    let oct = e.target.getAttribute('data-octave');
    if (!key) {
      this.props.stopPlaying();
    } else {
      this.props.onNoteOff(key, oct);
    }

  }
  handleMouseMove(e) {
    e.persist();
    e.preventDefault ? e.preventDefault() : e.returnValue = false;

    if (!e.buttons) {
      return this.props.stopPlaying();
    }

    let key = e.target.getAttribute('data-note');
    let oct = e.target.getAttribute('data-octave');

    if (!currentKey) {
      currentKey = key;
      currentOctave = oct;
    }

    if (key && (key !== currentKey || oct !== currentOctave) && this.props.isPlaying) {
      this.props.onNoteOn(key, oct);
      this.props.onNoteOff(currentKey, currentOctave);
      currentKey = key;
      currentOctave = oct;
    }

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
  onNoteOn: PropTypes.func.isRequired,
  onNoteOff: PropTypes.func.isRequired,
  onOctavePrev: PropTypes.func.isRequired,
  onOctaveNext: PropTypes.func.isRequired,
  isPlaying: PropTypes.bool,
  octave: PropTypes.number,
  stopPlaying: PropTypes.func,
};

export default SynthKeyboard;









