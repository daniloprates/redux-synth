import React, { Component, PropTypes } from 'react';
import { map } from '../utils';
import { OscTypeSet } from './PanelComps';
// import {ButtonSet, Button, Led, OscTypeSet} from './PanelComps';

class PanelLfo extends Component {
  constructor(props) {
      super(props);
  }
  handleChanges(type, param, value) {
    this.props.onPanelChanged.call(this, type, param, value);
  }

  render() {
    return (
      <div className="PanelLfo">
        <h3>LFO</h3>
        <label>OSC Type</label>
        <OscTypeSet
          {...this.props}
          onPanelChanged={this.handleChanges.bind(this)}
          param="lfo_oscType"
        />
        <label>OSC Frequency</label>
        <input
          type="range"
          ref="lfo_oscFreq"
          value={map(this.props.synth.lfo_oscFreq, 0, 15, 0, 100)}
          onChange={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'lfo_oscFreq')}
        />
        <label>Filter Type</label>
        <OscTypeSet
          {...this.props}
          onPanelChanged={this.handleChanges.bind(this)}
          param="lfo_fltType"
        />
        <label>Filter Frequency</label>
        <input
          type="range"
          ref="lfo_fltFreq"
          value={map(this.props.synth.lfo_fltFreq, 0, 15, 0, 100)}
          onChange={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'lfo_fltFreq')}
        />

      </div>
    );
  }
}

PanelLfo.propTypes = {
  synth: PropTypes.object,
  onPanelChanged: PropTypes.func,
  className: PropTypes.string,
};

export default PanelLfo;
