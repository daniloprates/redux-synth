import { map } from '../utils';
import { notesMidi } from '../constants/notes';

class SynthOscVoice {
  constructor(ctx, cfg) {

    window.v = this;

    this.osc = new ctx.Oscillator();

    this.update(cfg);

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
    gain = map(gain, 0, 1, 0, amplitude);

    /**/
    this.osc.amp(gain, 0.01);
    // this.gainNode.gain.value = gain;

  }

  stop() {
    /**/
    this.osc.amp(0, 0.01);
    // this.gainNode.gain.value = 0;
  }

  // setParam(param, value, object='osc') {
  //   this[object][param] = value;
  // }

  update(cfg) {

    this.osc.setType(cfg.type);
    this.osc.amplitude = cfg.amplitude;
    this.osc.octave = cfg.octave;

  }

}

export default SynthOscVoice;
