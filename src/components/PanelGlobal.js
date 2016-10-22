import React, { Component, PropTypes } from 'react';

class PanelGlobal extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div className="PanelGlobal">
          <h1>RDX</h1>
          <label htmlFor="panel-global-bpm">BPM</label>
          <input
            type="text"
            defaultValue={this.props.global.bpm}
            ref="bpm"
            onChange={this.props.onPanelChanged.bind(this, 'GLOBAL_CHANGED', 'bpm')}
            id="panel-global-bpm"
          />
          <label>Volume</label>
          <input
            type="range"
            defaultValue={this.props.global.amplitude*100}
            ref="amplitude"
            onInput={this.props.onPanelChanged.bind(this, 'GLOBAL_CHANGED', 'amplitude', 'decimal')}
          />
        </div>
      );
    }
}

PanelGlobal.propTypes = {
  global: PropTypes.object,
  amplitude: PropTypes.number,
  onPanelChanged: PropTypes.func
};

export default PanelGlobal;
