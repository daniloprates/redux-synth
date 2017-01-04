import React, { Component, PropTypes } from 'react';
import Panel from './Panel';

class PanelEnvelope extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <Panel
        name="Envelope"
      >
            <label>ADSR</label>
            <input
              type="range"
              ref="env_attackTime"
              value={this.props.synth.env_attackTime*100}
              onChange={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'env_attackTime', 'decimal')}
            />
            <input
              type="range"
              ref="env_decayTime"
              value={this.props.synth.env_decayTime*100}
              onChange={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'env_decayTime', 'decimal')}
            />
            <input
              type="range"
              ref="env_susPercent"
              value={this.props.synth.env_susPercent*100}
              onChange={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'env_susPercent', 'decimal')}
            />
            <input
              type="range"
              ref="env_releaseTime"
              value={this.props.synth.env_releaseTime*100}
              onChange={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'env_releaseTime', 'decimal')}
            />
          </Panel>
        );
    }
}

PanelEnvelope.propTypes = {
  synth: PropTypes.object,
  onPanelChanged: PropTypes.func,
  className: PropTypes.string,
};

export default PanelEnvelope;
