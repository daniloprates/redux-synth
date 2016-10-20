import SynthOscVoice from './SynthOscVoice';
import { oscCfg } from '../constants/oscillator';

const ctx = new (window.AudioContext || window.webkitAudioContext)();

class SynthOsc {
  constructor(props) {

    this.props = props;
    this.osc = [];
    let osc;

    [...Array(oscCfg.osc)].map((x, o) => {

      osc = {};

      this.osc[o] = {};

      osc.octave = oscCfg.octave;
      osc.voices = new Array(oscCfg.voices);
      osc.amplitude = oscCfg.amplitude;

      [...Array(oscCfg.voices)].map((x, v) => {
        osc.voices[v] = new SynthOscVoice(ctx, props);
      });

      this.osc[o] = osc;

    });

  }

  playVoices(notes, amplitude) {
    [...Array(oscCfg.voices)].map((x, i) => {
      if (notes[i]) {
        this.playVoice(i, notes[i], amplitude);
      } else {
        this.stopVoice(i);
      }
    });
  }

  playVoice(i, note, amplitude) {
    this.osc.map((osc) => {
      osc.voices[i].play(note, amplitude);
    });
  }

  stopVoices() {
    [...Array(oscCfg.voices)].map((x, i) => {
      this.stopVoice(i);
    });
  }

  stopVoice(i) {
    this.osc.map((osc) => {
      osc.voices[i].stop();
    });
  }

}

export default SynthOsc;
