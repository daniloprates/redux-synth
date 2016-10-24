
class SynthOscDelay {
  constructor(ctx, settings) {
    this.env = new ctx.Env();
    window.env = this.env;
    this.update(settings);
    this.isPlaying = false;
  }

  update(settings) {
    this.env.setADSR(
      settings.env_attackTime,
      settings.env_decayTime,
      settings.env_susPercent,
      settings.env_releaseTime
    );
    // this.env.setRange(
    //   settings.env_attackLevel,
    //   settings.env_releaseLevel
    // );
  }

  play() {
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
