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

      // window.onPanelChange = this.props.onPanelChange;
  }

  handlePanelChanged(type, value) {
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
            {...this.props.global}
            onPanelChanged={this.handlePanelChanged}
          />
          <PanelOscillators
            {...this.props.synth}
            onPanelChanged={this.handlePanelChanged}
          />
          <PanelFilter
            {...this.props}
            onPanelChanged={this.handlePanelChanged}
          />
          <PanelDelay
            {...this.props}
            onPanelChanged={this.handlePanelChanged}
          />
          <PanelReverb
            {...this.props}
            onPanelChanged={this.handlePanelChanged}
          />
          <PanelFx
            {...this.props}
            onPanelChanged={this.handlePanelChanged}
          />
          <PanelRec
            {...this.props}
            onPanelChanged={this.handlePanelChanged}
          />
          <PanelKeyboard
            {...this.props}
            {...this.props.notes}
            onPanelChanged={this.handlePanelChanged}
          />
        </div>
      </div>
    );
  }
}

SynthPanel.propTypes = {
  onPanelChanged: PropTypes.func.isRequired,
  global: PropTypes.object,
  octave: PropTypes.number
};

export default SynthPanel;





