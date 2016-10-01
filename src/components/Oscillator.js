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

      // this.osc1Wave = new OscillatorWave(props);

      this.osc1 = new p5.Oscillator();
      this.osc1.setType('triangle');
      this.osc1.amp(0);
      this.osc1.start();

      // this.osc2 = new p5.Oscillator();
      // this.osc2.setType('triangle');
      // this.osc2.amp(0);
      // this.osc2.start();

      // this.osc3 = new p5.Oscillator();
      // this.osc3.setType('triangle');
      // this.osc3.amp(0);
      // this.osc3.start();
  }
  componentWillReceiveProps(nextProps) {
    let amp = nextProps.isPlaying
              ? nextProps.amplitude
              : 0;

    let note = this.getNote(nextProps);

    if (!note) {
      amp = 0;
    } else {
      // console.log('note.frequency', note.frequency);
      // this.osc1.freq(parseInt(note.frequency));
      this.osc1.freq(note.frequency);
    }

    this.osc1.amp(amp, 0.1);

  }
  getNote(props) {

    let { octave } = props;
    let note = props.notes[props.notes.length-1];
    console.log('note', note);

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
