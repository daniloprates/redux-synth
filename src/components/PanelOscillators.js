import React, { Component, PropTypes } from 'react';
import PanelOscillator from '../components/PanelOscillator';

class PanelOscillators extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className="PanelOscillators">
        <h3>Oscillators</h3>
        <input
          type="range"
          value={this.props.synth.osc_amplitude1*100}
          ref="amplitude"
          onChange={this.props.onPanelChanged.bind(this, 'OSC_CHANGED', 'amplitude', 'decimal')}
        />
        <PanelOscillator
          {...this.props}
          onPanelOscChanged={this.props.onPanelChanged.bind(this)}
          i={0}
        />
        <PanelOscillator
          {...this.props}
          onPanelOscChanged={this.props.onPanelChanged.bind(this)}
          i={1}
        />
      </div>
    );
  }
}

PanelOscillators.propTypes = {
  synth: PropTypes.object,
  onPanelChanged: PropTypes.func,
};

export default PanelOscillators;
