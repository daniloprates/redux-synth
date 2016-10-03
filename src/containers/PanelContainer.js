import React, { Component, PropTypes } from 'react';
// import Panel from '../components/Panel';
import PanelGlobal from '../components/PanelGlobal';
import PanelOscillator from '../components/PanelOscillator';
import PanelFilter from '../components/PanelFilter';
import PanelDelay from '../components/PanelDelay';
import PanelReverb from '../components/PanelReverb';
import PanelFx from '../components/PanelFx';
import PanelRec from '../components/PanelRec';

/**
 * SynthPanel container
 * handles the panel interactions, translates into state actions
 * and send them up to the SynthPage via prop callback
 */
class SynthPanel extends Component {
  constructor(props) {
      super(props);
      this.octavesLength = 10;
      this.amp = 0;
  }

  handlePanelChange(type, item) {
    if (typeof item == 'object' && item.persist) {
      item.persist();
    }
    if (type === 'amplitude') {
      item = item.target.value / 100;
    }
    this.props.onPanelChanged(type, item);
  }

  render() {
    return (
      <div className="Panel">
        <PanelGlobal
          {...this.props}
          onPanelChange={this.handlePanelChange}
        />
        <PanelOscillator
          {...this.props}
        />
        <PanelFilter
          {...this.props}
        />
        <PanelDelay
          {...this.props}
        />
        <PanelReverb
          {...this.props}
        />
        <PanelFx
          {...this.props}
        />
        <PanelRec
          {...this.props}
        />
      </div>
    );
  }
}

SynthPanel.propTypes = {
  onPanelChanged: PropTypes.func.isRequired,
  octave: PropTypes.number
};

export default SynthPanel;





