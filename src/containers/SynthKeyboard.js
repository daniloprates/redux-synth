import React, { Component, PropTypes } from 'react';
// import keydown from 'react-keydown';
import Keyboard from '../components/Keyboard';
import { letterToNote } from '../constants/notes';

let currentKey;
let currentNote;

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

    if (typeof note == 'string') {
      this.props
      if (note == 'PREV_OCTAVE') {
        this.props.onOctavePrev();
      } else if (note == 'NEXT_OCTAVE') {
        this.props.onOctaveNext();
      }
    }

    if (note && note !== currentNote) {
      currentNote = note;
    }
    if (note !== undefined) {
      this.props.onNoteOn(note);
    }

  }

  // @keyup( 'enter' )
  handleKeyUp(e) {
    let note = letterToNote[e.key];
      this.props.onNoteOff(note);
      // this.props.stopPlaying(note);
  }

  handleMouseDown(e) {
    e.persist();
    e.preventDefault ? e.preventDefault() : e.returnValue = false;

    let key = e.target.getAttribute('data-note');
    this.props.onNoteOn(key);

  }
  handleMouseUp(e) {
    e.persist();
    e.preventDefault ? e.preventDefault() : e.returnValue = false;

    let key = e.target.getAttribute('data-note');
    this.props.onNoteOff(key);

  }
  handleMouseMove(e) {
    e.persist();
    e.preventDefault ? e.preventDefault() : e.returnValue = false;

    let key = e.target.getAttribute('data-note');

    if (key !== currentKey && this.props.isPlaying) {
      this.props.onNoteOn(key);
      this.props.onNoteOff(currentKey);
      currentKey = key;
    }

  }


  render() {
    // return (<div>{this.props.octave}</div>);
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
  onNoteChanged: PropTypes.func.isRequired,
  octave: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool,
  stopPlaying: PropTypes.func,
};

export default SynthKeyboard;

// const mapStateToProps = (state={}) => {
//   return state;
// };

// export default connect(mapStateToProps, {
//   noteOn,
//   noteOff,
//   noteChanged,
//   octaveChanged
// })(SynthKeyboard);











