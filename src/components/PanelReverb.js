import React, { Component, PropTypes } from 'react';

class PanelReverb extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="PanelReverb">
            <h3>Reverb</h3>
            <label htmlFor="panel-verb-time">Secs</label>
            <input type="range" value="0.5" min="0" max="1" id="panel-verb-time" />
            <label htmlFor="panel-verb-feedback">Decay</label>
            <input type="range" value="120" id="panel-verb-feedback" />
            <div>
              <label htmlFor="panel-verb-type">Reverse</label>
              <input type="radio" name="delay-type" value="b" /> b
              <input type="radio" name="delay-type" value="h" /> h
            </div>
          </div>
        );
    }
}

PanelReverb.propTypes = {
    className: PropTypes.string,
};

export default PanelReverb;
