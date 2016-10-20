import { notesMidi } from '../constants/notes';
import { oscCfg } from '../constants/oscillator';
import SynthVoice from './SynthVoice';

const ctx = new (window.AudioContext || window.webkitAudioContext)();

class Synth {

  constructor(props) {
    this.notes = [];
    this.osc = [];
    this.props = props;
    this.createOscs();

  }

  createOscs() {

    let osc;

    [...Array(oscCfg.osc)].map((x, o) => {

      osc = {};

      this.osc[o] = {};

      osc.octave = oscCfg.octave;
      osc.voices = new Array(oscCfg.voices);
      osc.amplitude = oscCfg.amplitude;

      [...Array(oscCfg.voices)].map((x, v) => {
        osc.voices[v] = new SynthVoice(ctx, this.props);
      });

      this.osc[o] = osc;

    });

  }

  update(nextProps) {

    if (!nextProps.isPlaying) {
      if (!this.notes.length) {
        return false;
      } else {
        return this.stopVoices();
      }
    }

    this.notes = new Array(oscCfg.voices);
    let { notes, amplitude, isPlaying } = nextProps;
    let note, noteNumber;

    if (!isPlaying) {amplitude = 0;}

    for (noteNumber in notes) {

      note = Object.assign({}, notes[noteNumber], notesMidi[noteNumber]);

      if (note.frequency) {
        this.notes[note.index] = note;
      }

    }

    this.playVoices(this.notes, amplitude);

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


export default Synth;
