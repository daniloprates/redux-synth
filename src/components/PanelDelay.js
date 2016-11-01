import React, { Component, PropTypes } from 'react';
import { map } from '../utils';
import {ButtonSet} from './PanelComps';

class PanelDelay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="panel-delay">
            <h3>Delay</h3>
            <label>Amp</label>
            <input
              type="range"
              ref="dly_amp"
              value={this.props.synth.dly_amp*100}
              onChange={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'dly_amp', 'decimal')}
            />
            <ButtonSet>
              <button
                className={`active-${this.props.synth.dly_type=='sync'}`}
                onMouseDown={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'dly_type', 'sync')}
              >Sync</button>
              <button
                className={`active-${this.props.synth.dly_type=='time'}`}
                onMouseDown={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'dly_type', 'time')}
              >Time</button>
            </ButtonSet>

            <label>Time</label>

            {
              (this.props.synth.dly_type == 'sync')
                ? (
                  <ButtonSet>
                    <button
                      className={`active-${this.props.synth[`dly_divBy`] == .5}`}
                      onMouseDown={this.props.onPanelChanged.bind(this, 'OSC_CHANGED', `dly_divBy`, .5)}
                    >1</button>
                    <button
                      className={`active-${this.props.synth[`dly_divBy`] == 1}`}
                      onMouseDown={this.props.onPanelChanged.bind(this, 'OSC_CHANGED', `dly_divBy`, 1)}
                    >1/4</button>
                    <button
                      className={`active-${this.props.synth[`dly_divBy`] == 2}`}
                      onMouseDown={this.props.onPanelChanged.bind(this, 'OSC_CHANGED', `dly_divBy`, 2)}
                    >1/8</button>
                    <button
                      className={`active-${this.props.synth[`dly_divBy`] == 3}`}
                      onMouseDown={this.props.onPanelChanged.bind(this, 'OSC_CHANGED', `dly_divBy`, 3)}
                    >1/8t</button>
                    <button
                      className={`active-${this.props.synth[`dly_divBy`] == 4}`}
                      onMouseDown={this.props.onPanelChanged.bind(this, 'OSC_CHANGED', `dly_divBy`, 4)}
                    >1/16</button>
                  </ButtonSet>
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
