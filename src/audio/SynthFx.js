import { getDelayTime } from '../utils';

class SynthFx {
  constructor(p5, cfg) {

    let { synth } = cfg;

    this.dly = new p5.Delay();
    this.flt = new p5.Filter();
    this.lfo = new p5.Oscillator();
    this.rev = new p5.Reverb();
    this.dstPre = new p5.Distortion(synth.dst_amp);
    this.dstPost = new p5.Distortion(synth.dst_amp);

    this.dstPost.process(this.rev);
    this.dstPost.process(this.dly);

    this.update(cfg);

    this.lfo.disconnect();
    this.lfo.start();
  }

  connect(voices, cfg) {
    voices.forEach(voice => {

      // REVERB
      voice.osc.connect(this.rev);

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

      // DISTORTION
      this.dstPre.process(voice.osc);
      this.dstPost.process(voice.osc);

    });
  }

  update(cfg) {

    let { synth, global } = cfg;

    // DELAY
    this.dly.amp(synth.dly_amp);
    this.dly.delayTime(getDelayTime(synth, global));
    this.dly.feedback(synth.dly_feedback);
    this.dly.filter(synth.dly_filter);

    // // REVERB
    this.rev.amp(synth.rev_amp);
    this.rev.set(
      synth.rev_seconds,
      synth.rev_decay,
      synth.rev_reverse
    );

    // // FILTER
    // this.flt.amp(synth.flt_amp);
    this.flt.setType(synth.flt_type);
    this.flt.set(
      synth.flt_frequency,
      synth.flt_resonance
    );

    this.lfo.freq(synth.lfo_freq);

    // DISTORTION
    if (synth.dst_active == 'pre') {
      this.dstPre.set(synth.dst_amount);
      this.dstPre.connect();
      this.dstPost.disconnect();
    } else if (synth.dst_active == 'post') {
      this.dstPost.set(synth.dst_amount);
      this.dstPre.disconnect();
      this.dstPost.connect();
    } else {
        this.dstPost.disconnect();
        this.dstPre.disconnect();
    }

  }
}

export default SynthFx;
