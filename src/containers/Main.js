import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
import { noteOn, noteOff, paramChanged, stopPlaying, octavePrev, octaveNext} from '../actions/synthActions';
import PanelContainer from './PanelContainer';
import KeyboardContainer from './KeyboardContainer';
import synth from '../audio/Synth';

class SynthPage extends Component {
  constructor(props) {
    super(props);
    synth.init(props);
    // this.synth = new Synth(props);
  }

  componentWillReceiveProps(nextProps) {
    synth.update(nextProps);
  }

  render() {
    return (
      <div className="app-container">
        <PanelContainer
          {...this.props}
          onParamChanged={this.props.paramChanged}
        />
        <KeyboardContainer
          {...this.props}
          onNoteOn={this.props.noteOn}
          onNoteOff={this.props.noteOff}
          stopPlaying={this.props.stopPlaying}
          onOctavePrev={this.props.octavePrev}
          onOctaveNext={this.props.octaveNext}
        />
      </div>
    );
  }
}

SynthPage.propTypes = {
  global: PropTypes.object,
  keyboard: PropTypes.object,
  noteOn: PropTypes.func.isRequired,
  noteOff: PropTypes.func.isRequired,
  paramChanged: PropTypes.func.isRequired,
  stopPlaying: PropTypes.func.isRequired,
  octavePrev: PropTypes.func.isRequired,
  octaveNext: PropTypes.func.isRequired,
};

const mapStateToProps = (state={}) => {
  return state;
};

export default connect(mapStateToProps, {
  noteOn,
  noteOff,
  paramChanged,
  stopPlaying,
  octavePrev,
  octaveNext
})(SynthPage);
