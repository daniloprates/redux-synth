import React, { Component, PropTypes } from 'react';
import themes from '../constants/themes';
// import { map } from '../utils';

class PanelSettings extends Component {
    constructor(props) {
      super(props);
    }

    render() {
      return (
        <div className="panel-settings">
          <h3>Delay</h3>
          <label>Theme</label>
          <select
            value={this.props.global.theme}
            ref="theme"
            onChange={this.props.onPanelChanged.bind(this, 'GLOBAL_CHANGED','theme')}
            className="panel-settings-themes"
          >
            {
                themes.map((theme,i) => (
                    <option
                        key={i}
                        value={theme}
                    >
                    {theme}
                    </option>
                ))
            }
          </select>
          <button
            className="panel-settings-panic"
            onClick={this.props.stopPlaying.bind(this)}
          >
          Stop notes!
          </button>

        </div>
      );
    }
}

PanelSettings.propTypes = {
  global: PropTypes.object,
  amplitude: PropTypes.number,
  onPanelChanged: PropTypes.func,
  stopPlaying: PropTypes.func,
};

export default PanelSettings;
