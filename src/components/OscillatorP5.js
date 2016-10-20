import React, { Component, PropTypes } from 'react';

import p5 from 'p5';
import p5Sound from '../../node_modules/p5/lib/addons/p5.sound.js';
import { notesMidi } from '../constants/notes';
import { map } from '../utils';
window.p5 = p5;

let oscDisplay = [];

// Avoid ESLINT error:
p5Sound;

class Oscillator extends Component {
  constructor(props) {
      super(props);
      this.osc = [];
      this.notes = {};

      [...Array(5)].map((x, i) => {
        this.osc[i] = new p5.Oscillator();
        this.osc[i].setType(props.type);
        this.osc[i].amp(0);
        this.osc[i].start();
      });

      window.osc = this.osc;
  }

  componentWillReceiveProps(nextProps) {

    this.osc.forEach(osc => {
      osc.setType(nextProps.type);
      osc.isActive = false;
    });

    let { notes, amplitude, isPlaying } = nextProps;

    if (!isPlaying) {amplitude = 0;}

    let note, noteNumber, osc;

    for (noteNumber in notes) {

      note = Object.assign({}, notes[noteNumber], notesMidi[noteNumber]);
      osc = this.osc[note.index];

      if (note.frequency) {

        osc.isActive = true;

        if (osc.note != noteNumber) {
          osc.note = noteNumber;
          this.playNote(note,osc, amplitude);
        }

      } else {
        this.resetOsc(osc);
      }
    }

    this.osc.forEach(osc => {
      if (!osc.isActive) {
        this.resetOsc(osc);
      }
    });

  }

  resetOsc(osc) {
    osc.amp(0, 0.2);
    osc.note = null;
    osc.isActive = false;
  }

  playNote(note,osc, amplitude) {

    osc.freq(note.frequency);

    amplitude = map(note.velocity, 0, 127, 0, amplitude);

    if (osc.f != amplitude) {
      osc.amp(amplitude, 0.2);
    }

  }

  render() {
    return (
      <div className="Oscillator">
        {oscDisplay.map(note => {return note.name + note.octave + ' '; })}
      </div>
    );

  }
}

Oscillator.propTypes = {
  type: PropTypes.string,
  notes: PropTypes.object,
  amplitude: PropTypes.number
};

export default Oscillator;
