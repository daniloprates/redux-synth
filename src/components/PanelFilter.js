import React, { Component, PropTypes } from 'react';

class PanelFilter extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="PanelFilter">
            <h3>Filter</h3>
            <div>
              <button>l</button>
              <button>b</button>
              <button>h</button>
            </div>
            <label htmlFor="panel-osc-amp">Amplitude</label>
            <input type="range" value="120" id="panel-osc-amp" />
            <label>Type</label>
            <button>Sine</button>
            <button>Triangle</button>
            <button>Sawtooth</button>
            <button>Square</button>
            <label>Type</label>
          </div>
        );
    }
}

PanelFilter.propTypes = {
    className: PropTypes.string,
};

export default PanelFilter;
