import { getDelayTime } from '../utils';

class SynthFx {
  constructor(p5, cfg) {

    let { synth } = cfg;

    this.dly = new p5.Delay();
    this.flt = new p5.Filter();
    this.lfoOsc0 = new p5.Oscillator();
    this.lfoOsc1 = new p5.Oscillator();
    this.lfoFlt = new p5.Oscillator();
    this.rev = new p5.Reverb();
    this.dstPre = new p5.Distortion(synth.dst_amp);
    this.dstPost = new p5.Distortion(synth.dst_amp);

    this.update(cfg);

    this.dstPost.process(this.rev);
    this.dstPost.process(this.dly);

    this.lfoOsc0.disconnect();
    this.lfoOsc1.disconnect();
    this.lfoFlt.disconnect();
    this.lfoOsc0.start();
    this.lfoOsc1.start();
    this.lfoFlt.start();
    this.flt.freq(this.lfoFlt);
  }

  connect(voices, cfg) {
    voices.forEach(voice => {

      voice.osc.connect(this.flt);

      this.dstPre.process(voice.osc);
      this.dstPost.process(voice.osc);

      voice.osc.freq(this[`lfoOsc${voice.oscIndex}`]);

    });

    this.dly.process(
        this.flt,
        cfg.dly_time,
        cfg.dly_feedback,
        cfg.dly_filter
      );
    this.rev.process(this.flt);

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

    this.lfoOsc0.freq(synth.lfo_oscFreq);
    this.lfoOsc1.freq(synth.lfo_oscFreq);
    this.lfoFlt.freq(synth.lfo_fltFreq);
    this.lfoOsc0.setType(synth.lfo_oscType);
    this.lfoOsc1.setType(synth.lfo_oscType);
    this.lfoFlt.setType(synth.lfo_fltType);
    this.lfoOsc0.amp(synth.osc_lfoEnv0);
    this.lfoOsc1.amp(synth.osc_lfoEnv1);
    this.lfoFlt.amp(synth.flt_lfoEnv);

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
