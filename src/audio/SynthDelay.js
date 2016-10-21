// import { map } from '../utils';
// import { notesMidi } from '../constants/notes';

class SynthOscVoice {
  constructor(ctx, props) {
    props;
    this.dly = new ctx.Delay();

  }

  update(delay, feedback, filter) {
    this.dly.delayTime(delay);
    this.dly.feedback(feedback);
    this.dly.filter(filter);
  }

  connect(voice) {
    this.dly.process(voice, .1, .1, 2300);
  }

  setParam(param, value, object='osc') {
    this[object][param] = value;
  }

}

export default SynthOscVoice;
