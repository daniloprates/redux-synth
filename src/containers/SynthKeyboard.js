import React, { Component, PropTypes } from 'react';
// import {bindActionCreators} from 'redux';
// import { noteOn, noteOff, noteChanged, octaveChanged} from '../actions/synthActions';
import Keyboard from '../components/Keyboard';

let currentKey;
let currentOctave;

/**
 *
 * SynthKeyboard container
 * handles the mouse events
 */

class SynthKeyboard extends Component {
  constructor(props) {
      super(props);
  }
  // componentWillReceiveProps(nextProps) {
      // console.log('componentWillReceiveProps KEYBOARD', nextProps);
  // }

  handleMouseDown(e) {
    e.persist();
    e.preventDefault ? e.preventDefault() : e.returnValue = false;

    let key = e.target.getAttribute('data-note');
    this.props.onNoteOn(key);

    if (e == 1) {
      this.props.onNoteOn();
    }
  }
  handleMouseUp(e) {
    e.persist();
    e.preventDefault ? e.preventDefault() : e.returnValue = false;

    let key = e.target.getAttribute('data-note');
    this.props.onNoteOff(key);

    if (e == 1) {
      this.props.onNoteOff();
    }
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

    if (e == 1) {
      this.props.onNoteChanged();
    }
  }

  render() {
    // return (<div>{this.props.octave}</div>);
    return (
        <Keyboard
          {...this.props}
          onMouseDown={this.handleMouseDown.bind(this)}
          onMouseUp={this.handleMouseUp.bind(this)}
          onMouseMove={this.handleMouseMove.bind(this)}
        />
    );
  }
}

SynthKeyboard.propTypes = {
  onNoteOn: PropTypes.func.isRequired,
  onNoteOff: PropTypes.func.isRequired,
  onNoteChanged: PropTypes.func.isRequired,
  octave: PropTypes.number.isRequired,
  isPlaying: PropTypes.bool
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











