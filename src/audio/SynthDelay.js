// import { map } from '../utils';
// import { notesMidi } from '../constants/notes';

class SynthOscVoice {
  constructor(ctx, props) {
    props;
    this.dly = new ctx.Delay();
    this.dly.delayTime(.12);
    this.dly.feedback(.7);
    this.dly.filter(2300);

  }

  connect(voice) {
    this.dly.process(voice, .3, .7, 2300);
  }

  setParam(param, value, object='osc') {
    this[object][param] = value;
  }

}

export default SynthOscVoice;
