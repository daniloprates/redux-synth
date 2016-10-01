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
    console.log('note', note);

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

    let { octave } = props;
    let note = props.notes[0];

    if (note == -1) {
      note = 11;
      octave--;
    }
    if (note == 12) {
      note = 0;
      octave++;
    }

    if (
      octave === 'undefined' ||
      octave === 'undefined' ||
      !notes[octave] ||
      !notes[octave][note]
    ) {return false;}

    return notes[octave][note];
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
