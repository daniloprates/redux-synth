
class SynthOscDelay {
  constructor(ctx, settings) {
    this.env = new ctx.Env();
    this.update(settings);
  }

  // connect(voices, settings) {

  //   // this.env.amp(settings.env_amp);
  //   voices.forEach(voice => {
  //     this.env.process(
  //       voice.osc,
  //       env_attackLevel,
  //       env_releaseLevel,
  //       env_attackTime,
  //       env_decayTime,
  //       env_susPercent,
  //       env_releaseTime
  //     );
  //   });
  // }

  update(settings) {
    this.env.set(
      settings.attackLevel,
      settings.releaseLevel,
      settings.attackTime,
      settings.decayTime,
      settings.susPercent,
      settings.releaseTime
    );
  }

  play() {
    this.env.play();
  }

}

export default SynthOscDelay;
