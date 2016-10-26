import React, { Component, PropTypes } from 'react';
import { map } from '../utils';

class PanelFilter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="PanelFilter">
            <h3>Filter</h3>
            <div>
              <button
                className={`active-${this.props.synth.flt_type === 'lowpass'}`}
                onClick={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'flt_type', 'lowpass')}
              >low</button>
              <button
                className={`active-${this.props.synth.flt_type === 'bandpass'}`}
                onClick={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'flt_type', 'bandpass')}
              >band</button>
              <button
                className={`active-${this.props.synth.flt_type === 'highpass'}`}
                onClick={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'flt_type', 'highpass')}
              >high</button>
            </div>
            <label>Frequency</label>
            <input
              type="range"
              ref="flt_frequency"
              defaultValue={map(this.props.synth.flt_requency, 5, 12000, 0, 100)}
              onClick={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'flt_frequency')}
            />
            <label>Resonance</label>
            <input
              type="range"
              ref="flt_resonance"
              defaultValue={map(this.props.synth.flt_resonance, 0.001, 25, 0, 100)}
              onClick={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'flt_resonance')}
            />
          </div>
        );
    }
}

PanelFilter.propTypes = {
  synth: PropTypes.object,
  onPanelChanged: PropTypes.func,
  className: PropTypes.string,
};

export default PanelFilter;
