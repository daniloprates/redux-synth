import React, { Component, PropTypes } from 'react';
import {ButtonSet, Button, Led, OscTypeButton} from './PanelComps';

class PanelOscillator extends Component {
  constructor(props) {
    super(props);
  }

  param(paramName) {
    return this.props.synth[`osc_${paramName}${this.props.i}`];
  }

  render() {
    return (
      <div className="PanelOscillator">
        <Led
          {...this.props}
          on={this.param('amplitude') > 0}
        />
        <label>Type</label>
        <ButtonSet>

          <OscTypeButton
            {...this.props}
            value="sine"
          >
          SIN
          </OscTypeButton>
          <OscTypeButton
            {...this.props}
            value="triangle"
          >
          TRI
          </OscTypeButton>

          <OscTypeButton
            {...this.props}
            value="sawtooth"
          >
          SAW
          </OscTypeButton>
          <OscTypeButton
            {...this.props}
            value="square"
          >
          SQR
          </OscTypeButton>

        </ButtonSet>
        <label>Oct</label>
        <ButtonSet>
          <Button
            className={`active-${this.props.synth[`osc_octave${this.props.i}`] == -1}`}
            onClick={this.props.onPanelChanged.bind(this, 'OSC_CHANGED', `osc_octave${this.props.i}`, -1)}
          >-1</Button>
          <Button
            className={`active-${this.props.synth[`osc_octave${this.props.i}`] == 0}`}
            onClick={this.props.onPanelChanged.bind(this, 'OSC_CHANGED', `osc_octave${this.props.i}`, 0)}
          >0</Button>
          <Button
            className={`active-${this.props.synth[`osc_octave${this.props.i}`] == 1}`}
            onClick={this.props.onPanelChanged.bind(this, 'OSC_CHANGED', `osc_octave${this.props.i}`, 1)}
          >1</Button>
        </ButtonSet>



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
