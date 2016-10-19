import React, { Component, PropTypes } from 'react';
// import Panel from '../components/Panel';
import PanelGlobal from '../components/PanelGlobal';
import PanelOscillator from '../components/PanelOscillator';
import PanelFilter from '../components/PanelFilter';
import PanelDelay from '../components/PanelDelay';
import PanelReverb from '../components/PanelReverb';
import PanelFx from '../components/PanelFx';
import PanelRec from '../components/PanelRec';
import PanelKeyboard from '../components/PanelKeyboard';

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

      window.onPanelChanged = this.props.onPanelChanged;
  }

  handlePanelChange(type, value) {
    if (typeof item == 'object' && value.persist) {
      value.persist();
    }
    if (type === 'amplitude') {
      value = value.target.value / 100;
    }
    if (typeof this.refs == 'object' && this.refs[type]) {
      let newValue = this.refs[type].value;
      if (value === 'int') {
        newValue = parseInt(newValue);
      }
      value = newValue;
      this.refs[type].blur();
    }
    this.props.onPanelChanged(type, value);
  }

  render() {
    return (
      <div className="Panel">
        <PanelGlobal
          {...this.props}
          onPanelChange={this.handlePanelChange}
        />
        <PanelOscillator
          {...this.props}
          onPanelChange={this.handlePanelChange}
        />
        <PanelFilter
          {...this.props}
          onPanelChange={this.handlePanelChange}
        />
        <PanelDelay
          {...this.props}
          onPanelChange={this.handlePanelChange}
        />
        <PanelReverb
          {...this.props}
          onPanelChange={this.handlePanelChange}
        />
        <PanelFx
          {...this.props}
          onPanelChange={this.handlePanelChange}
        />
        <PanelRec
          {...this.props}
          onPanelChange={this.handlePanelChange}
        />
        <PanelKeyboard
          {...this.props}
          onPanelChange={this.handlePanelChange}
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





