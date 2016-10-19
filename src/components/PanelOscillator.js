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
            <button onClick={this.props.onPanelChange.bind(this, 'type', 'sine')}>Sine</button>
            <button onClick={this.props.onPanelChange.bind(this, 'type', 'triangle')}>Triangle</button>
            <button onClick={this.props.onPanelChange.bind(this, 'type', 'sawtooth')}>Sawtooth</button>
            <button onClick={this.props.onPanelChange.bind(this, 'type', 'square')}>Square</button>
            <label>Type</label>
          </div>
        );
    }
}

PanelOscillator.propTypes = {
    onPanelChange: PropTypes.func,
};

export default PanelOscillator;
