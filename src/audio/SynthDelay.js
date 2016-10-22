
class SynthOscDelay {
  constructor(ctx, props) {
    props;
    this.dly = new ctx.Delay();
  }

  update(amp, time, feedback, filter) {
    this.dly.amp(amp);
    this.dly.delayTime(time);
    this.dly.feedback(feedback);
    this.dly.filter(filter);
  }

  connect(voice) {
    this.dly.process(voice, .11, .7, 2300);
  }

}

export default SynthOscDelay;
