import React, { Component, PropTypes } from 'react';

class PanelEnvelope extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="PanelEnvelope">
            <h3>Envelope</h3>
            {/*
            <label>Attack/Release Level</label>
            <input
              type="range"
              ref="env_attackLevel"
              defaultValue={this.props.synth.env_attackLevel*100}
              onClick={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'env_attackLevel', 'decimal')}
            />
            <input
              type="range"
              ref="env_releaseLevel"
              defaultValue={this.props.synth.env_releaseLevel*100}
              onClick={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'env_releaseLevel', 'decimal')}
            />
            */}
            <label>ADSR</label>
            <input
              type="range"
              ref="env_attackTime"
              defaultValue={this.props.synth.env_attackTime*100}
              onClick={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'env_attackTime', 'decimal')}
            />
            <input
              type="range"
              ref="env_decayTime"
              defaultValue={this.props.synth.env_decayTime*100}
              onClick={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'env_decayTime', 'decimal')}
            />
            <input
              type="range"
              ref="env_susPercent"
              defaultValue={this.props.synth.env_susPercent*100}
              onClick={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'env_susPercent', 'decimal')}
            />
            <input
              type="range"
              ref="env_releaseTime"
              defaultValue={this.props.synth.env_releaseTime*100}
              onClick={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'env_releaseTime', 'decimal')}
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
