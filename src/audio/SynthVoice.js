import { notesMidi } from '../constants/notes';
// import { map } from '../utils';

class SynthOscVoice {
  constructor(ctx, i, cfg, env) {

    this.osc = new ctx.Oscillator();
    this.osc.amp(env);
    // p5 sound bug that starts the osc amp != env amp
    this.osc.output.gain.value = 0;
    this.oscIndex = i;
    this.update(cfg);
    this.osc.start();
  }

  play(note) {

    // Get the note acording to the osc octave
    let noteNumber = parseInt(note.number) + (12 * this.octave);

    note = Object.assign({}, note, notesMidi[noteNumber]);

    this.osc.freq(note.frequency);
    // this.osc.frequency.value = note.frequency;

    // // Merge the note velocity with the osc amplitude
    // let gain = map(note.velocity, 0, 127, 0, this.osc.amplitude);

    // // Merge it again with the main synth amplitude
    // gain = map(gain, 0, 1, 0, amplitude);

    // /**/
    // this.osc.amp(gain, 0.01);
    // // this.gainNode.gain.value = gain;

  }

  update(cfg) {
    this.osc.setType(cfg[`osc_type${this.oscIndex}`]);
    this.octave = cfg[`osc_octave${this.oscIndex}`];
  }

}

export default SynthOscVoice;
