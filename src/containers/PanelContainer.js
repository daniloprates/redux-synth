import React, { Component, PropTypes } from 'react';
// import Panel from '../components/Panel';
import PanelGlobal from '../components/PanelGlobal';
import PanelOscillators from '../components/PanelOscillators';
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

    if (typeof this.refs == 'object' && this.refs[type]) {
      let newValue = this.refs[type].value;
      if (value === 'int') {
        newValue = parseInt(newValue);
      }
      if (value === 'decimal') {
        newValue = newValue/100;
      }
      value = newValue;
      if (this.refs[type].blur) {
        this.refs[type].blur();
      }
    }

    this.props.onPanelChanged(type, value);
  }

  render() {
    return (
      <div className="Panel">
        <div className="panel-content">
          <PanelGlobal
            {...this.props}
            onPanelChange={this.handlePanelChange}
          />
          <PanelOscillators
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
      </div>
    );
  }
}

SynthPanel.propTypes = {
  onPanelChanged: PropTypes.func.isRequired,
  octave: PropTypes.number
};

export default SynthPanel;





