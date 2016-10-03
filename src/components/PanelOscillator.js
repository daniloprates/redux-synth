import React, { Component, PropTypes } from 'react';

class PanelOscillator extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="PanelOscillator">
            <button>o</button>
            <label htmlFor="panel-osc-amp">Amplitude</label>
            <input type="range" value="120" id="panel-osc-amp" />
            <label>Type</label>
            <button>Sine</button>
            <button>Triangle</button>
            <button>Sawtooth</button>
            <button>Square</button>
            <label>Type</label>
          </div>
        );
    }
}

PanelOscillator.propTypes = {
    className: PropTypes.string,
};

export default PanelOscillator;
