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
  }

  handleParamChanged(type, param, value) {

    if (typeof item == 'object' && value.persist) {
      value.persist();
    }

    if (typeof this.refs == 'object' && this.refs[param]) {
      let newValue = this.refs[param].value;
      if (value === 'int') {
        newValue = parseInt(newValue);
      }
      if (value === 'decimal') {
        newValue = newValue/100;
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
          <PanelDelay
            {...this.props}
            onPanelChanged={this.handleParamChanged}
          />
          {/*
          <PanelFilter
            {...this.props}
            onParamChanged={this.handleParamChanged}
          />
          <PanelReverb
            {...this.props}
            onParamChanged={this.handleParamChanged}
          />
          <PanelFx
            {...this.props}
            onParamChanged={this.handleParamChanged}
          />
          <PanelRec
            {...this.props}
            onParamChanged={this.handleParamChanged}
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





