import React, { Component, PropTypes } from 'react';
import PanelOscillator from '../components/PanelOscillator';

class PanelOscillators extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="PanelOscillators">

            <h3>Oscillators</h3>

            <input type="range"/>

            <PanelOscillator
              {...this.props}
            />
            <PanelOscillator
              {...this.props}
            />

          </div>
        );
    }
}

PanelOscillators.propTypes = {
    onPanelChange: PropTypes.func,
};

export default PanelOscillators;
