import { map } from '../utils';

class SynthOscDelay {
  constructor(ctx, oscIndex, cfg) {
    this.env = new ctx.Env();
    this.oscIndex = oscIndex;
    this.update(cfg);
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
    // this.env.setRange(
    //   cfg.synth.env_attackLevel,
    //   cfg.synth.env_releaseLevel
    // );
  }

  play(note) {

    // Merge the note velocity with the osc amplitude
    let gain = map(note.velocity, 0, 127, 0, this.amplitude);
    console.log('gain', this.oscIndex, gain);

    this.env.mult(gain);

    if (!this.isPlaying) {
      this.isPlaying = true;
      this.env.triggerAttack();
    }
  }
  stop() {
    this.isPlaying = false;
    this.env.triggerRelease();
  }

}

export default SynthOscDelay;
