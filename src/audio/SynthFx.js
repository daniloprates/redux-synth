import { getDelayTime } from '../utils';


class SynthFx {
  constructor(p5, cfg) {

    this.p5 = p5;

    this.dly = new p5.Delay();

    this.flt = new p5.Filter();
    // this.flt.disconnect();

    this.lfo = new p5.Oscillator();

    this.rev = new p5.Reverb();
    // this.rev.disconnect();
    // this.rev.connect(this.dst);

    this.dst = new p5.Distortion(cfg.dst_amp);
    this.dst.process(this.rev);

    this.update(cfg);

    this.lfo.disconnect();
    this.lfo.start();
  }

  connect(voices, cfg) {
    voices.forEach(voice => {

      // REVERB
      voice.osc.connect(this.rev);
      // this.rev.amp(cfg.rev_amp);
      // this.rev.process(voice.osc);

      // DELAY
      // voice.osc.connect(this.dly);
      this.dly.process(
        voice.osc,
        cfg.dly_time,
        cfg.dly_feedback,
        cfg.dly_filter
      );

      // FILTER
      voice.osc.connect(this.flt);
      // this.flt.connect(voice.env);
      // this.flt.process(
      //   voice.osc,
      //   cfg.flt_frequency,
      //   cfg.flt_resonance
      // );

      // DISTORTION
      this.dst.process(voice.osc);

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

    this.lfo.freq(cfg.lfo_freq);

    // DISTORTION
    if (cfg.dst_active) {
      this.dst.connect();
    } else {
      this.dst.disconnect();
    }
    this.dst.set(cfg.dst_amount);

  }
}

export default SynthFx;
