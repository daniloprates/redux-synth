import React, { Component, PropTypes } from 'react';

class PanelDelay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="PanelDelay">
            <h3>Delay</h3>
            <label>Amp</label>
            <input
              type="range"
              ref="dly_amp"
              defaultValue={this.props.synth.dly_amp*100}
              onClick={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'dly_amp', 'decimal')}
            />
            <label>Time</label>
            <input
              type="range"
              ref="dly_time"
              defaultValue={this.props.synth.dly_time*100}
              onClick={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'dly_time', 'decimal')}
            />
            <label>Feedback</label>
            <input
              type="range"
              ref="dly_feedback"
              defaultValue={this.props.synth.dly_feedback*100}
              onClick={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'dly_feedback', 'decimal')}
            />
            <div>
              <label htmlFor="panel-dly-type">Type</label>
              <input type="radio" name="delay-type" value="b" /> b
              <input type="radio" name="delay-type" value="h" /> h
            </div>
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
