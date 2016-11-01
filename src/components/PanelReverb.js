import React, { Component, PropTypes } from 'react';

class PanelReverb extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="panel-reverb">
            <h3>Reverb</h3>
            <label>Amp</label>
            <input
              type="range"
              ref="rev_amp"
              value={this.props.synth.rev_amp*100}
              onChange={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'rev_amp', 'decimal')}
            />
            <label>Seconds</label>
            <input
              type="range"
              ref="rev_seconds"
              value={this.props.synth.rev_seconds*10}
              onChange={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'rev_seconds')}
            />
            <label>Decay</label>
            <input
              type="range"
              ref="rev_decay"
              value={this.props.synth.rev_decay*10}
              onChange={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'rev_decay')}
            />
            <label>Reverse</label>
            <input
              type="checkbox"
              value={this.props.synth.rev_reverse}
              ref="rev_reverse"
              onChange={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'rev_reverse', 'boolean')}
              defaultChecked={this.props.synth.rev_reverse === true}
            />
          </div>
        );
    }
}

PanelReverb.propTypes = {
  synth: PropTypes.object,
  onPanelChanged: PropTypes.func,
  className: PropTypes.string,
};

export default PanelReverb;
