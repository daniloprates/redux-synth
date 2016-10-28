import { notesMidi } from '../constants/notes';
import { map } from '../utils';


class SynthOscVoice {
  constructor(p5, oscIndex, cfg) {

    this.osc = new p5.Oscillator();
    this.env = new p5.Env();
    this.osc.disconnect();
    this.osc.output.gain.value = 0;
    this.osc.amp(this.env);
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

  play(_note, velocity) {

    // Get the note acording to the osc octave
    let note = parseInt(_note) + (12 * this.octave);

    if (!notesMidi[note]) {
      console.warn('Note not found', _note, note);
      return false;
    }

    let gain = map(velocity, 0, 127, 0, this.amplitude);
    let frequency = notesMidi[note].frequency;

    this.osc.freq(frequency);
    this.env.mult(gain);
    this.env.triggerAttack();

  }

  stop() {
    // this.isPlaying = false;
    this.env.triggerRelease();
  }


}

export default SynthOscVoice;
