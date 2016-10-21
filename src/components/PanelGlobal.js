import React, { Component, PropTypes } from 'react';

class PanelGlobal extends Component {
    constructor(props) {
        super(props);
        console.log('props', props);
    }

    render() {
        return (
          <div className="PanelGlobal">
            <h1>RDX</h1>
            <label htmlFor="panel-global-bpm">BPM</label>
            <input type="text" defaultValue="120" id="panel-global-bpm" />
            <label>Volume</label>
            <input
              type="range"
              defaultValue={this.props.amplitude*100}
              ref="amplitude"
              onInput={this.props.onPanelChanged.bind(this, 'amplitude', 'decimal')}
            />
          </div>
        );
    }
}

PanelGlobal.propTypes = {
  amplitude: PropTypes.number,
  onPanelChanged: PropTypes.func
};

export default PanelGlobal;
