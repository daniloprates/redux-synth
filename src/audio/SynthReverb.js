
class SynthOscReverb {
  constructor(ctx, settings) {
    this.rev = new ctx.Reverb();
    this.update(settings);
  }

  connect(voices) {
    voices.forEach(voice => {
      this.rev.process(voice.osc);
    });
  }

  update(settings) {
    this.rev.amp(settings.rev_amp);
    this.rev.set(
      settings.rev_seconds,
      settings.rev_decay,
      settings.rev_reverse
    );
  }
}

export default SynthOscReverb;
