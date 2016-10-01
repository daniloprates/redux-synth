import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import { noteOn, noteOff, noteChanged, octaveChanged, amplitudeChange, stopPlaying, octavePrev, octaveNext} from '../actions/synthActions';
import SynthPanel from './SynthPanel';
import SynthKeyboard from './SynthKeyboard';

class SynthPage extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div>
        <SynthPanel
          {...this.props.synth}
          onOctaveChanged={this.props.octaveChanged}
          onAmplitudeChange={this.props.amplitudeChange}
         />
        <SynthKeyboard
          {...this.props.synth}
          onNoteOn={this.props.noteOn}
          onNoteOff={this.props.noteOff}
          onNoteChanged={this.props.noteChanged}
          stopPlaying={this.props.stopPlaying}
          onOctavePrev={this.props.octavePrev}
          onOctaveNext={this.props.octaveNext}
        />
      </div>
    );
  }
}

SynthPage.propTypes = {
  noteOn: PropTypes.func.isRequired,
  noteOff: PropTypes.func.isRequired,
  noteChanged: PropTypes.func.isRequired,
  octaveChanged: PropTypes.func.isRequired,
  stopPlaying: PropTypes.func.isRequired
};

const mapStateToProps = (state={}) => {
  return state;
};

export default connect(mapStateToProps, {
  noteOn,
  noteOff,
  noteChanged,
  octaveChanged,
  amplitudeChange,
  stopPlaying,
  octavePrev,
  octaveNext
})(SynthPage);
