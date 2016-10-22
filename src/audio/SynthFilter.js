
class SynthOscFilter {
  constructor(ctx, settings) {
    this.flt = new ctx.Filter();
    this.update(settings);
  }

  connect(voices, settings) {
    voices.forEach(voice => {
      this.flt.process(
        voice.osc,
        settings.flt_frequency,
        settings.flt_resonance
      );
    });
  }

  update(settings) {
      console.log('settings', settings);
    this.flt.setType(settings.flt_type);
    this.flt.set(
      settings.flt_frequency,
      settings.flt_resonance
    );
  }
}

export default SynthOscFilter;
