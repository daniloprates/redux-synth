import React, { Component, PropTypes } from 'react';

class PanelDelay extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="PanelDelay">
            <h3>Delay</h3>
            <label htmlFor="panel-dly-time">Time</label>
            <input type="range" onInput={console.log(this.value)} id="panel-dly-time" />
            <label htmlFor="panel-dly-feedback">Feedback</label>
            <input type="range" defaultValue="120" id="panel-dly-feedback" />
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
    className: PropTypes.string,
};

export default PanelDelay;
