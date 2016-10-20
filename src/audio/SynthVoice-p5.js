import { map } from '../utils';
import { notesMidi } from '../constants/notes';

import p5 from 'p5';
import p5Sound from '../../node_modules/p5/lib/addons/p5.sound.js';

window.p5 = p5;
// Avoid ESLINT error:
p5Sound;

class SynthOscVoice {
  constructor(ctx, props) {
    this.ctx = ctx;

    this.osc = new p5.Oscillator();

    this.osc.setType(props.type);

    this.osc.type = props.type;
    this.osc.amplitude = props.amplitude;
    this.osc.octave = props.octave;

    this.osc.amp(0);
    this.osc.start();

  }

  play(note, amplitude) {

    // Get the note acording to the osc octave
    let noteNumber = parseInt(note.number) + (12 * this.osc.octave);

    note = Object.assign({}, note, notesMidi[noteNumber]);

    /**/
    this.osc.freq(note.frequency);
    // this.osc.frequency.value = note.frequency;

    // Merge the note velocity with the osc amplitude
    let gain = map(note.velocity, 0, 127, 0, this.osc.amplitude);

    // Merge it again with the main synth amplitude
    gain = map(amplitude, 0, 1, 0, amplitude);

    /**/
    this.osc.amp(gain, 0.2);
    // this.gainNode.gain.value = gain;

  }

  stop() {
    /**/
    this.osc.amp(0, 0.2);
    // this.gainNode.gain.value = 0;
  }

  setParam(param, value, object='osc') {
    this[object][param] = value;
  }

}

export default SynthOscVoice;
