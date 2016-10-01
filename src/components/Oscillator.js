import React, { Component, PropTypes } from 'react';

import p5 from 'p5';
import p5Sound from '../../node_modules/p5/lib/addons/p5.sound.js';
import { notes } from '../constants/notes';

let oscDisplay = [];

// Avoid ESLINT error:
p5Sound;

class Oscillator extends Component {
  constructor(props) {
      super(props);
      this.osc = [];

      [...Array(5)].map((x, i) => {
        this.osc[i] = new p5.Oscillator();
        this.osc[i].setType('triangle');
        this.osc[i].amp(0);
        this.osc[i].start();
      });

  }
  componentWillReceiveProps(nextProps) {

    let { notes, amplitude, isPlaying, octave } = nextProps;

    if (!isPlaying) {amplitude = 0;}

    oscDisplay = [];

    notes.forEach((note, i) => {

      if (i >= this.osc.length) {
        i = 0;
      }

      note = this.getNote(note, octave);

      if (note) {
        oscDisplay.push(note);
        this.osc[i].freq(note.frequency);
        this.osc[i].amp(amplitude, 0.1);
      } else {
        this.osc[i].amp(0, 0.1);
      }
    });

    for (let i=notes.length;i<this.osc.length;i++) {
      this.osc[i].amp(0, 0.1);
    }

  }
  getNote(note, octave) {

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
        {oscDisplay.map(note => {return note.name + note.octave + ' ';})}
      </div>
    );

  }
}

Oscillator.propTypes = {
  notes: PropTypes.array,
  amplitude: PropTypes.number
};

export default Oscillator;
