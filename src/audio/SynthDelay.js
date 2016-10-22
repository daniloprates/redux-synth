
class SynthOscDelay {
  constructor(ctx, settings) {
    this.dly = new ctx.Delay();
    this.update(settings);
  }

  connect(voices, settings) {

    // this.dly.amp(settings.dly_amp);
    voices.forEach(voice => {
      this.dly.process(
        voice.osc,
        settings.dly_time,
        settings.dly_feedback,
        settings.dly_filter
      );
    });
  }

  update(settings) {
    this.dly.amp(settings.dly_amp);
    this.dly.delayTime(settings.dly_time);
    this.dly.feedback(settings.dly_feedback);
    this.dly.filter(settings.dly_filter);
  }

}

export default SynthOscDelay;
