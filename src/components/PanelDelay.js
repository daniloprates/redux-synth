import React, { Component, PropTypes } from 'react';
import { map } from '../utils';

class PanelDelay extends Component {
    constructor(props) {
        super(props);
    }

    delaySync() {

    }

    render() {
        return (
          <div className="PanelDelay">
            <h3>Delay</h3>
            <label>Amp</label>
            <input
              type="range"
              ref="dly_amp"
              value={this.props.synth.dly_amp*100}
              onChange={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'dly_amp', 'decimal')}
            />
            <button
              className={`active-${this.props.synth.dly_type=='sync'}`}
              onMouseDown={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'dly_type', 'sync')}
            >Sync</button>
            <button
              className={`active-${this.props.synth.dly_type=='time'}`}
              onMouseDown={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'dly_type', 'time')}
            >Time</button>

            <label>Time</label>

            {
              (this.props.synth.dly_type == 'sync')
                ? (
                  <div>
                    <button
                      className={`active-${this.props.synth[`dly_divBy`] == 1}`}
                      onMouseDown={this.props.onPanelChanged.bind(this, 'OSC_CHANGED', `dly_divBy`, 1)}
                    >1</button>
                    <button
                      className={`active-${this.props.synth[`dly_divBy`] == 4}`}
                      onMouseDown={this.props.onPanelChanged.bind(this, 'OSC_CHANGED', `dly_divBy`, 4)}
                    >1/4</button>
                    <button
                      className={`active-${this.props.synth[`dly_divBy`] == 8}`}
                      onMouseDown={this.props.onPanelChanged.bind(this, 'OSC_CHANGED', `dly_divBy`, 8)}
                    >1/8</button>
                    <button
                      className={`active-${this.props.synth[`dly_divBy`] == '8t'}`}
                      onMouseDown={this.props.onPanelChanged.bind(this, 'OSC_CHANGED', `dly_divBy`, '8t')}
                    >1/8t</button>
                    <button
                      className={`active-${this.props.synth[`dly_divBy`] == 16}`}
                      onMouseDown={this.props.onPanelChanged.bind(this, 'OSC_CHANGED', `dly_divBy`, 16)}
                    >1/16</button>
                  </div>
                )
                : (
                    <input
                      type="range"
                      ref="dly_time"
                      value={this.props.synth.dly_time*100}
                      onChange={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'dly_time', 'decimal')}
                    />
                  )
            }

            <label>Feedback</label>
            <input
              type="range"
              ref="dly_feedback"
              value={map(this.props.synth.dly_feedback, 0, 0.8, 0, 100)}
              onChange={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'dly_feedback')}
            />

          </div>
        );
    }
}

PanelDelay.propTypes = {
  synth: PropTypes.object,
  onPanelChanged: PropTypes.func,
  className: PropTypes.string,
};

export default PanelDelay;
