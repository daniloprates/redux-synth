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
              onClick={this.props.onPanelChanged.bind(this, 'type', 'sine')}
            >Test</Button>
            <button onClick={this.props.onPanelChanged.bind(this, 'type', 'sine')}>Sine</button>
          </div>
        );
    }
}

PanelOscillator.propTypes = {
    onPanelChanged: PropTypes.func,
};

export default PanelOscillator;
