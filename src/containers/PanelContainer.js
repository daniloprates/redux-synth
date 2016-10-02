import React, { Component, PropTypes } from 'react';
import Panel from '../components/Panel';
import Oscillator from '../components/Oscillator';

/**
 * SynthPanel container
 * handles the panel interactions, translates into state actions
 * and send them up to the SynthPage via prop callback
 */
class SynthPanel extends Component {
  constructor(props) {
      super(props);
      this.octavesLength = 10;
      this.amp = 0;
  }

  handlePanelChange(type, item) {
    if (typeof item == 'object' && item.persist) {
      item.persist();
    }
    if (type === 'amplitude') {
      item = item.target.value / 100;
    }
    this.props.onPanelChanged(type, item);
  }

  render() {
    return (
      <div>
        <Panel
          {...this.props}
          octavesLength={this.octavesLength}
          onPanelChange={this.handlePanelChange}
        />
        <Oscillator
          {...this.props}
         />
      </div>
    );
  }
}

SynthPanel.propTypes = {
  onPanelChanged: PropTypes.func.isRequired,
  octave: PropTypes.number
};

export default SynthPanel;





