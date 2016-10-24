import React, { Component, PropTypes } from 'react';
import presets from '../constants/presets';

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


          <select
            value={this.props.global.presets}
            ref="presets"
            onChange={this.props.onPanelChanged.bind(this, 'GLOBAL_CHANGED','presets')}
            style={{width: "100%"}}
          >
            {
                Object.keys(presets).map((presets,i) => (
                    <option
                        key={i}
                        value={presets}
                    >
                    {presets}
                    </option>
                ))
            }
          </select>





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
