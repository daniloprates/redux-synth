import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { noteOn, noteOff, panelChanged, amplitudeChange, stopPlaying, octavePrev, octaveNext} from '../actions/synthActions';
import PanelContainer from './PanelContainer';
import KeyboardContainer from './KeyboardContainer';
import Oscillator from '../components/Oscillator';

class SynthPage extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div>
        <PanelContainer
          {...this.props.synth}
          onPanelChanged={this.props.panelChanged}
         />
        <KeyboardContainer
          {...this.props.synth}
          onNoteOn={this.props.noteOn}
          onNoteOff={this.props.noteOff}
          stopPlaying={this.props.stopPlaying}
          onOctavePrev={this.props.octavePrev}
          onOctaveNext={this.props.octaveNext}
        />
        <Oscillator
          {...this.props.synth}
        />
      </div>
    );
  }
}

SynthPage.propTypes = {
  noteOn: PropTypes.func.isRequired,
  noteOff: PropTypes.func.isRequired,
  panelChanged: PropTypes.func.isRequired,
  stopPlaying: PropTypes.func.isRequired,
  octavePrev: PropTypes.func.isRequired,
  octaveNext: PropTypes.func.isRequired,
  synth: PropTypes.object
};

const mapStateToProps = (state={}) => {
  return state;
};

export default connect(mapStateToProps, {
  noteOn,
  noteOff,
  panelChanged,
  amplitudeChange,
  stopPlaying,
  octavePrev,
  octaveNext
})(SynthPage);
