import { oscCfg } from '../constants/oscillator';
import { map } from '../utils';

class SynthOscVoice {
  constructor(ctx) {
    this.ctx = ctx;

    this.gainNode = ctx.createGain();
    this.gainNode.connect(ctx.destination);
    this.gainNode.gain.value = 0;

    this.osc = ctx.createOscillator();
    this.osc.type = oscCfg.type;
    this.osc.detune.value = 0;
    this.osc.connect(this.gainNode);
    this.osc.start(ctx.currentTime);

  }

  play(note, amplitude) {
    this.osc.frequency.value = note.frequency;

    amplitude = map(note.velocity, 0, 127, 0, amplitude);
    this.gainNode.gain.value = amplitude;
  }

  stop() {
    this.gainNode.gain.value = 0;
  }

}

export default SynthOscVoice;
