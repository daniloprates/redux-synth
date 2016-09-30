import React, { Component, PropTypes } from 'react';
// import {bindActionCreators} from 'redux';
// import { noteOn, noteOff, noteChanged, octaveChanged} from '../actions/synthActions';
import Keyboard from '../components/Keyboard';



/**
 *
 * SynthKeyboard container
 * handles the mouse events
 */

class SynthKeyboard extends Component {
  constructor(props) {
      console.log('props.synth', props.synth);
      super(props);
      this.synth = props.synth;
  }

  handleMouseDown(e) {
    e.persist();
    e.preventDefault ? e.preventDefault() : e.returnValue = false;

    if (e == 1) {
      this.props.onNoteOn();
    }
  }
  handleMouseUp(e) {
    e.persist();
    e.preventDefault ? e.preventDefault() : e.returnValue = false;

    if (e == 1) {
      this.props.onNoteOff();
    }
  }
  handleMouseMove(e) {
    e.persist();
    e.preventDefault ? e.preventDefault() : e.returnValue = false;

    if (e == 1) {
      this.props.onNoteChanged();
    }
  }

  render() {
    console.log('this.synth',this.synth)
    return (<div>{this.synth.octave}</div>)
    // return (
    //     <Keyboard
    //       onMouseDown={this.handleMouseDown}
    //       onMouseUp={this.handleMouseUp}
    //       onMouseMove={this.handleMouseMove}
    //     />
    // );
  }
}

SynthKeyboard.propTypes = {
  onNoteOn: PropTypes.func.isRequired,
  onNoteOff: PropTypes.func.isRequired,
  onNoteChanged: PropTypes.func.isRequired
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











