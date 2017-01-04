import React, { Component, PropTypes } from 'react';
import { map } from '../utils';
import {ButtonSet} from './PanelComps';
import Panel from './Panel';

class PanelFilter extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Panel
        name="Filter"
      >
        <ButtonSet>
          <button
            className={`active-${this.props.synth.flt_type === 'lowpass'}`}
            onClick={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'flt_type', 'lowpass')}
          >low</button>
          <button
            className={`active-${this.props.synth.flt_type === 'bandpass'}`}
            onClick={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'flt_type', 'bandpass')}
          >band</button>
          <button
            className={`active-${this.props.synth.flt_type === 'highpass'}`}
            onClick={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'flt_type', 'highpass')}
          >high</button>
        </ButtonSet>
        <label>Frequency</label>
        <input
          type="range"
          ref="flt_frequency"
          defaultValue={map(this.props.synth.flt_requency, 5, 13000, 0, 100)}
          onClick={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'flt_frequency')}
        />
        <label>Resonance</label>
        <input
          type="range"
          ref="flt_resonance"
          defaultValue={map(this.props.synth.flt_resonance, 0.001, 40, 0, 100)}
          onClick={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'flt_resonance')}
        />
        <label>LFO Env</label>
        <input
          type="range"
          ref="flt_lfoEnv"
          value={map(this.props.synth.flt_lfoEnv, 0, 1300, 0, 100)}
          onChange={this.props.onPanelChanged.bind(this, 'OSC_CHANGED', 'flt_lfoEnv')}
        />
      </Panel>
    );
  }
}

PanelFilter.propTypes = {
  synth: PropTypes.object,
  onPanelChanged: PropTypes.func,
  className: PropTypes.string,
};

export default PanelFilter;
