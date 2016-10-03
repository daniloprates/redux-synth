import React, { Component, PropTypes } from 'react';

class PanelFx extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="PanelFx">
            <h3>Fx</h3>
            <label>Distort</label>
            <button>o</button>
            <label>Phase</label>
            <button>o</button>
          </div>
        );
    }
}

PanelFx.propTypes = {
    className: PropTypes.string,
};

export default PanelFx;
