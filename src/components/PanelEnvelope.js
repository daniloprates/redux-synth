import React, { Component, PropTypes } from 'react';

class PanelEnvelope extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="PanelEnvelope">
            <h3>Envelope</h3>
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
          </div>
        );
    }
}

PanelEnvelope.propTypes = {
  synth: PropTypes.object,
  onPanelChanged: PropTypes.func,
  className: PropTypes.string,
};

export default PanelEnvelope;
