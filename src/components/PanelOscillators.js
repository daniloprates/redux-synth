import React, { Component, PropTypes } from 'react';
import PanelOscillator from '../components/PanelOscillator';
import Panel from './Panel';

class PanelOscillators extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <Panel
        name="Oscillatorz"
        size="double"
      >
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
      </Panel>
    );
  }
}

PanelOscillators.propTypes = {
  synth: PropTypes.object,
  onPanelChanged: PropTypes.func,
};

export default PanelOscillators;
