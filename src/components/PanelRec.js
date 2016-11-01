import React, { Component, PropTypes } from 'react';

class PanelRec extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="panel-rec">
            <h3>Rec</h3>
            <button
              className={`is-recording-${this.props.global.rec_active === true}`}
            />
          </div>
        );
    }
}

PanelRec.propTypes = {
    global: PropTypes.object,
};

export default PanelRec;
