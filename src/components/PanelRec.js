import React, { Component, PropTypes } from 'react';

class PanelRec extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="PanelRec">
            <h3>Rec</h3>
            <button>o</button>
          </div>
        );
    }
}

PanelRec.propTypes = {
    className: PropTypes.string,
};

export default PanelRec;
