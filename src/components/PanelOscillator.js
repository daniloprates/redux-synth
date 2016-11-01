import React, { Component, PropTypes } from 'react';
import {ButtonSet, Button, Led, OscTypeSet} from './PanelComps';
import { map } from '../utils';

class PanelOscillator extends Component {
  constructor(props) {
    super(props);
  }
  param(paramName) {
    return this.props.synth[`osc_${paramName}${this.props.i}`];
  }
  handleChanges(type, param, value) {
    this.props.onPanelChanged.call(this, type, param, value);
  }

  render() {
    return (
      <div className="panel-oscillator">
        <Led
          {...this.props}
          on={this.param('amplitude') > 0}
        />
        <label>Type</label>
        <OscTypeSet
          {...this.props}
          onPanelChanged={this.handleChanges.bind(this)}
          param={`osc_type${this.props.i}`}
        />

        <label>Oct</label>
        <ButtonSet>
          <Button
            className={`active-${this.props.synth[`osc_octave${this.props.i}`] == -1}`}
            onMouseDown={this.props.onPanelChanged.bind(this, 'OSC_CHANGED', `osc_octave${this.props.i}`, -1)}
          >-1</Button>
          <Button
            className={`active-${this.props.synth[`osc_octave${this.props.i}`] == 0}`}
            onMouseDown={this.props.onPanelChanged.bind(this, 'OSC_CHANGED', `osc_octave${this.props.i}`, 0)}
          >0</Button>
          <Button
            className={`active-${this.props.synth[`osc_octave${this.props.i}`] == 1}`}
            onMouseDown={this.props.onPanelChanged.bind(this, 'OSC_CHANGED', `osc_octave${this.props.i}`, 1)}
          >1</Button>
        </ButtonSet>

        {/**/}
          <label>LFO Env</label>
          <input
            type="range"
            ref={`osc_lfoEnv${this.props.i}`}
            value={map(this.props.synth[`osc_lfoEnv${this.props.i}`], 0, 60, 0, 100)}
            onChange={this.props.onPanelChanged.bind(this, 'OSC_CHANGED', `osc_lfoEnv${this.props.i}`)}
          />
        {/**/}


      </div>
    );
  }
}

PanelOscillator.propTypes = {
  isActive: PropTypes.bool,
  synth: PropTypes.object,
  i: PropTypes.number,
  onPanelChanged: PropTypes.func,
};

export default PanelOscillator;
