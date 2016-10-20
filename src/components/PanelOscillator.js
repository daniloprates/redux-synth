import React, { Component, PropTypes } from 'react';
import {Button, Led} from './PanelComps';

class PanelOscillator extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="PanelOscillator">
            <Led
              {...this.props}
              on={true}
            />
            <Button
              onClick={this.props.onPanelChange.bind(this, 'type', 'sine')}
            >Test</Button>
            <button onClick={this.props.onPanelChange.bind(this, 'type', 'sine')}>Sine</button>
          </div>
        );
    }
}

PanelOscillator.propTypes = {
    onPanelChange: PropTypes.func,
};

export default PanelOscillator;
