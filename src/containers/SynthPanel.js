import React, { Component, PropTypes } from 'react';
// import {bindActionCreators} from 'redux';
// import { noteOn, noteOff, noteChanged, octaveChanged} from '../actions/synthActions';
import Panel from '../components/Panel';



/**
 *
 * SynthPanel container
 * handles the mouse events
 */

class SynthPanel extends Component {
  constructor(props) {
      super(props);
  }

  handleOctaveSlider(e) {
    e.persist();
    e.preventDefault ? e.preventDefault() : e.returnValue = false;

    if (e == 1) {
      this.props.onNoteOn();
    }
  }

  render() {
    console.log('this.synth',this.synth)
    return (<div>{this.synth.octave}</div>)
    // return (
    //     <Panel
    //       onMouseDown={this.handleMouseDown}
    //       onMouseUp={this.handleMouseUp}
    //       onMouseMove={this.handleMouseMove}
    //     />
    // );
  }
}

SynthPanel.propTypes = {
  onOctaveChanged: PropTypes.func.isRequired
};

export default SynthPanel;

// const mapStateToProps = (state={}) => {
//   return state;
// };

// export default connect(mapStateToProps, {
//   noteOn,
//   noteOff,
//   noteChanged,
//   octaveChanged
// })(SynthPanel);











