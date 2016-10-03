import React, { Component, PropTypes } from 'react';

class PanelGlobal extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="PanelGlobal">
            <label htmlFor="panel-global-bpm">BPM</label>
            <input type="text" value="120" id="panel-global-bpm" />
            <label htmlFor="panel-global-amplitude">Amplitude</label>
            <input type="range" value="120" min="0" max="1" id="panel-global-amplitude" />
          </div>
        );
    }
}

PanelGlobal.propTypes = {
    className: PropTypes.string,
};

export default PanelGlobal;
