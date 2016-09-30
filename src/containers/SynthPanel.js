import React, { Component, PropTypes } from 'react';
import Panel from '../components/Panel';
import Oscillator from '../components/Oscillator';

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

  // componentWillReceiveProps(nextProps) {
  //     console.log('componentWillReceiveProps', nextProps);
  // }

  handleOctaveClick(octave) {
    if (octave !== this.props.octave) {
      this.props.onOctaveChanged(octave);
    }
  }

  handleAmplitudeChange(ampSlider) {
    let amp = ampSlider.value;
    if (amp > 50) {
      amp = 0.5;
    } else {
      amp = 0;
    }
    if (amp != this.amp) {
        console.log('amp', amp);
      this.amp = amp;
      this.props.onAmplitudeChange(amp);
    }
  }

  render() {
    return (
      <div>
        <Panel
          {...this.props}
          octavesLength={this.octavesLength}
          onOctaveClick={this.handleOctaveClick.bind(this)}
          onAmplitudeChange={this.handleAmplitudeChange.bind(this)}
        />
        <Oscillator
          {...this.props}
         />
      </div>
    );
  }
}

SynthPanel.propTypes = {
  onOctaveChanged: PropTypes.func.isRequired,
  onAmplitudeChange: PropTypes.func.isRequired,
  octave: PropTypes.number
};

export default SynthPanel;





