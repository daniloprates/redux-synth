import React, { Component, PropTypes } from 'react';
import presets from '../constants/presets';
import { map } from '../utils';

class PanelGlobal extends Component {
    constructor(props) {
      super(props);
      window.onresize = this.handleGlobalAmp.bind(this);
      this.handleGlobalAmp();
    }

    handleGlobalAmp() {

      if (window.innerWidth <= 780) {
        this.oldAmp = this.oldAmp || this.props.global.amplitude;
        this.props.onPanelChanged.call(this, 'GLOBAL_CHANGED', 'amplitude', 1, true);
      } else if (this.oldAmp) {
        this.props.onPanelChanged.call(this, 'GLOBAL_CHANGED', 'amplitude', this.oldAmp);
      }
    }

    render() {
      return (
        <div className="PanelGlobal">
          <h1>RDX</h1>
          <label>BPM</label>
          <input
            type="text"
            readOnly="true"
            value={this.props.global.bpm}
            className="panel-global-bpm"
          />
          <input
            type="range"
            value={map(this.props.global.bpm, 60, 240, 0, 100)}
            ref="bpm"
            className="panel-global-bpm-range"
            onChange={this.props.onPanelChanged.bind(this, 'GLOBAL_CHANGED', 'bpm')}
          />
          <label>Volume</label>
          <input
            type="range"
            defaultValue={this.props.global.amplitude*100}
            ref="amplitude"
            className="panel-global-amplitude"
            onInput={this.props.onPanelChanged.bind(this, 'GLOBAL_CHANGED', 'amplitude', 'decimal')}
          />
          <select
            value={this.props.global.presets}
            ref="presets"
            onChange={this.props.onPanelChanged.bind(this, 'GLOBAL_CHANGED','presets')}
            className="panel-global-presets"
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

          {
            (window.innerWidth <= 780)
              ? (
                  <button
                    className="panel-global-panic"
                    onClick={this.props.stopPlaying.bind(this)}
                  >
                  Panic!
                  </button>
                )
              : false
          }



        </div>
      );
    }
}

PanelGlobal.propTypes = {
  global: PropTypes.object,
  amplitude: PropTypes.number,
  onPanelChanged: PropTypes.func,
  stopPlaying: PropTypes.func,
};

export default PanelGlobal;
