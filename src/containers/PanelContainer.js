import React, { Component, PropTypes } from 'react';
// import Panel from '../components/Panel';
import PanelGlobal from '../components/PanelGlobal';
import PanelEnvelope from '../components/PanelEnvelope';
import PanelOscillators from '../components/PanelOscillators';
import PanelFilter from '../components/PanelFilter';
import PanelDelay from '../components/PanelDelay';
import PanelReverb from '../components/PanelReverb';
import PanelLfo from '../components/PanelLfo';
import PanelFx from '../components/PanelFx';
import PanelRec from '../components/PanelRec';
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

  handleParamChanged(type, param, value, forceValue) {
    if (typeof item == 'object' && value.persist) {
      value.persist();
    }

    if (typeof this === 'undefined') {
        return console.log('this undefined', param, value);
    }

    if (typeof this !== 'undefined' && typeof this.refs == 'object' && this.refs[param] && forceValue !== true) {
        // console.log('param', param);
      let newValue = this.refs[param].value;
      // Generic param types
      if (value === 'int') {
        newValue = parseInt(newValue);
      }
      if (value === 'decimal') {
        newValue = newValue/100;
        if (newValue < 0.05) {
          if (param === 'env_susPercent') {
            newValue = 0;
          } else {
            newValue = 0.01;
          }
        }
      }
      if (value === 'boolean') {
        newValue = this.refs[param].checked;
      }
      // max rev_seconds is 10
      // max rev_decay is 100, but it's reduced to 10 as more than that doesn't make sense musicaly
      if (param === 'rev_seconds' || param === 'rev_decay') {
        newValue = parseInt(newValue/10);
        if (newValue === 0) {
          newValue = 0.001;
        }
      }
      // Reduce max feedback to .7 to avoid infinite loop
      if (param === 'dly_feedback') {
        newValue = map(newValue, 0, 100, 0, 0.8);
      }
      if (param === 'flt_frequency') {
        newValue = map(newValue, 0, 100, 5, 13000);
      }
      if (param === 'flt_resonance') {
        newValue = map(newValue, 0, 100, 0.001, 40);
      }
      if (param === 'lfo_oscFreq' || param === 'lfo_fltFreq') {
        newValue = map(newValue, 0, 100, 0, 15);
      }
      if (param === 'bpm') {
        newValue = parseInt(map(newValue, 0, 100, 59, 241));
      }
      if (param === 'osc_lfoEnv0' || param === 'osc_lfoEnv1') {
        newValue = parseInt(map(newValue, 0, 100, 0, 60));
      }
      if (param === 'flt_lfoEnv') {
        newValue = parseInt(map(newValue, 0, 100, 0, 1300));
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
          <div className="panel-tabs">
            <div className="panel-tab tab-active">
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
              <PanelLfo
                {...this.props}
                onPanelChanged={this.handleParamChanged}
              />
              <PanelFx
                {...this.props}
                onPanelChanged={this.handleParamChanged}
              />
            </div>
            <div className="panel-tab">
              <PanelRec
                {...this.props}
                onPanelChanged={this.handleParamChanged}
              />
            </div>
          </div>
        </div>
        <PanelKeyboard
          {...this.props}
          onPanelChanged={this.handleParamChanged}
        />
      </div>
    );
  }
}

SynthPanel.propTypes = {
  onParamChanged: PropTypes.func.isRequired,
  octave: PropTypes.number
};

export default SynthPanel;





