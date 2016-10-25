
class SynthFx {
  constructor(ctx, cfg) {

    this.ctx = ctx;

    this.dly = new ctx.Delay();
    this.rev = new ctx.Reverb();
    this.flt = new ctx.Filter();
    // this.dst = new ctx.Distortion(cfg.dst_amp);

    this.update(cfg);
  }

  connect(voices, cfg) {
    voices.forEach(voice => {

      // REVERB
      this.rev.amp(cfg.rev_amp);
      this.rev.process(voice.osc);

      // DELAY
      this.dly.process(
        voice.osc,
        cfg.dly_time,
        cfg.dly_feedback,
        cfg.dly_filter
      );

      // FILTER
      this.flt.process(
        voice.osc,
        cfg.flt_frequency,
        cfg.flt_resonance
      );

      // DISTORTION
      // this.dst.process(
      //   voice.osc
      // //   this.dst
      // );
      // voice.osc.connect(this.dst);

    });
  }

  update(cfg) {

    // DELAY
    this.dly.amp(cfg.dly_amp);
    this.dly.delayTime(cfg.dly_time);
    this.dly.feedback(cfg.dly_feedback);
    this.dly.filter(cfg.dly_filter);

    // // REVERB
    this.rev.amp(cfg.rev_amp);
    this.rev.set(
      cfg.rev_seconds,
      cfg.rev_decay,
      cfg.rev_reverse
    );

    // // FILTER
    // this.flt.amp(cfg.flt_amp);
    this.flt.setType(cfg.flt_type);
    this.flt.set(
      cfg.flt_frequency,
      cfg.flt_resonance
    );

    // DISTORTION
    // this.dst = new this.ctx.Distortion(cfg.dst_amp);
    // console.log('cfg.dst_amp', cfg.dst_amp);
    // this.dst.set(cfg.dst_amp);
    // this.dst.output.gain.value = cfg.dst_amp;

  }
}

export default SynthFx;
