
class SynthOscReverb {
  constructor(ctx, props) {
    props;
    this.rev = new ctx.Reverb();
  }

  update(amp, seconds, decay, reverse) {
    this.rev.amp(amp);
    this.rev.set(seconds, decay, reverse);
  }

  connect(voice) {
    this.rev.process(voice, 3, 2, false);
  }

}

export default SynthOscReverb;
