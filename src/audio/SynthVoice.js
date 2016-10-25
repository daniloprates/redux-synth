import { notesMidi } from '../constants/notes';
import { map } from '../utils';


class SynthOscVoice {
  constructor(ctx, oscIndex, cfg) {

    this.osc = new ctx.Oscillator();
    this.env = new ctx.Env();

    this.osc.amp(this.env);
    // p5 sound bug that starts the osc amp != env amp
    this.osc.output.gain.value = 0;
    this.oscIndex = oscIndex;

    this.update(cfg);
    this.osc.start();

    this.isPlaying = false;
  }

  update(cfg) {

    let oscAmp = parseFloat(cfg.synth[`osc_amplitude${this.oscIndex}`]);

    this.amplitude = map(oscAmp, 0, 1, 0, cfg.global.amplitude);
    this.env.setADSR(
      cfg.synth.env_attackTime,
      cfg.synth.env_decayTime,
      cfg.synth.env_susPercent,
      cfg.synth.env_releaseTime
    );

    this.osc.setType(cfg.synth[`osc_type${this.oscIndex}`]);
    this.octave = cfg.synth[`osc_octave${this.oscIndex}`];
  }

  play(note) {

    // console.log('this.noteNumber', this.noteNumber, note.number, this.isPlaying);

    if (this.isPlaying && this.noteNumber === note.number) {
      return false;
    }

    this.isPlaying = true;
    this.noteNumber = note.number;

    // Get the note acording to the osc octave
    let noteNumber = parseInt(note.number) + (12 * this.octave);
    let gain = map(note.velocity, 0, 127, 0, this.amplitude);

    note = Object.assign({}, note, notesMidi[noteNumber]);

    this.osc.freq(note.frequency);
    this.env.mult(gain);
    this.env.triggerAttack();

  }

  stop() {
    this.isPlaying = false;
    this.env.triggerRelease();
  }


}

export default SynthOscVoice;
