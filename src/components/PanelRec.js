import React, { Component, PropTypes } from 'react';
import Panel from './Panel';

class PanelRec extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <Panel
        name="Rec"
      >
        <button
          className={`is-recording-${this.props.global.rec_active === true}`}
        />
      </Panel>
    );
  }
}

PanelRec.propTypes = {
    global: PropTypes.object,
};

export default PanelRec;
