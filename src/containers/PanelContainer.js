import React, { Component, PropTypes } from 'react';
// import Panel from '../components/Panel';
import PanelGlobal from '../components/PanelGlobal';
import PanelEnvelope from '../components/PanelEnvelope';
import PanelOscillators from '../components/PanelOscillators';
import PanelFilter from '../components/PanelFilter';
import PanelDelay from '../components/PanelDelay';
import PanelReverb from '../components/PanelReverb';
// import PanelFx from '../components/PanelFx';
// import PanelRec from '../components/PanelRec';
import PanelKeyboard from '../components/PanelKeyboard';
import { map } from '../utils';

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

  handleParamChanged(type, param, value) {
    if (typeof item == 'object' && value.persist) {
      value.persist();
    }

    if (typeof this.refs == 'object' && this.refs[param]) {
        // console.log('param', param);
      let newValue = this.refs[param].value;
      // Generic param types
      if (value === 'int') {
        newValue = parseInt(newValue);
      }
      if (value === 'decimal') {
        newValue = newValue/100;
      }
      if (value === 'boolean') {
        newValue = this.refs[param].checked;
      }
      // max rev_seconds is 10
      // max rev_seconds is 100, but it's reduced to 10 as more than that doesn't make sense musicaly
      if (param === 'rev_seconds' || param === 'rev_decay') {
        newValue = parseInt(newValue/10);
        if (newValue === 0) {
          newValue = 0.001;
        }
      }
      // Reduce max feedback to .7 to avoid infinite loop
      if (param === 'dly_feedback') {
        newValue = newValue * 0.7;
      }
      if (param === 'flt_frequency') {
        newValue = map(newValue, 0, 100, 10, 22050);
      }
      if (param === 'flt_resonance') {
        newValue = map(newValue, 0, 100, 0, 1000);
      }
      if (param === 'env_attackTime' && newValue === 0) {
        newValue = 0.01;
      }

      value = newValue;
      if (this.refs[param].blur) {
        this.refs[param].blur();
      }
    }

    this.props.onParamChanged(type, param, value);

  }

  render() {
    return (
      <div className="Panel">
        <div className="panel-content">
          <PanelGlobal
            {...this.props}
            onPanelChanged={this.handleParamChanged}
          />
          <PanelOscillators
            {...this.props}
            onPanelChanged={this.handleParamChanged}
          />
          <PanelEnvelope
            {...this.props}
            onPanelChanged={this.handleParamChanged}
          />
          <PanelFilter
            {...this.props}
            onPanelChanged={this.handleParamChanged}
          />
          <PanelDelay
            {...this.props}
            onPanelChanged={this.handleParamChanged}
          />
          <PanelReverb
            {...this.props}
            onPanelChanged={this.handleParamChanged}
          />
          {/*
          <PanelFx
            {...this.props}
            onPanelChanged={this.handleParamChanged}
          />
          <PanelRec
            {...this.props}
            onPanelChanged={this.handleParamChanged}
          />
          */}
          <PanelKeyboard
            {...this.props}
            onPanelChanged={this.handleParamChanged}
          />
        </div>
      </div>
    );
  }
}

SynthPanel.propTypes = {
  onParamChanged: PropTypes.func.isRequired,
  octave: PropTypes.number
};

export default SynthPanel;





