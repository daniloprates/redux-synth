import React, { Component, PropTypes } from 'react';

import p5 from 'p5';
import p5Sound from '../../node_modules/p5/lib/addons/p5.sound.js';
import { notes } from '../constants/notes';

// import OscillatorWave from './OscillatorWave';

p5Sound;
// OscillatorWave;

class Oscillator extends Component {
  constructor(props) {
      super(props);

      // this.oscillatorWave = new OscillatorWave(props);

      this.oscillator = new p5.Oscillator();
      this.oscillator.setType('triangle');
      this.oscillator.amp(0);
      this.oscillator.start();

  }
  componentWillReceiveProps(nextProps) {
    let amp = nextProps.isPlaying
              ? nextProps.amplitude
              : 0;

    let note = this.getNote(nextProps);

    if (!note) {
      amp = 0;
    } else {
      console.log('note.frequency', note.frequency);
      // this.oscillator.freq(parseInt(note.frequency));
      this.oscillator.freq(note.frequency);
    }

    this.oscillator.amp(amp, 0.2);

  }
  getNote(props) {
    if (
      props.octave === 'undefined' ||
      props.octave === 'undefined' ||
      !notes[props.octave] ||
      !notes[props.octave][props.notes[0]]
    ) {return false;}

    return notes[props.octave][props.notes[0]];
  }
  render() {
    return (
      <div className="Oscillator">
        {this.props.notes.toString()}
      </div>
    );

  }
}


Oscillator.propTypes = {
  notes: PropTypes.array,
  amplitude: PropTypes.number
};

export default Oscillator;
