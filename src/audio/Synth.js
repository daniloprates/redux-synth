// import { notesMidi } from '../constants/notes';
import { synthCfg } from '../constants/synth';
import SynthVoice from './SynthVoice';
import SynthDelay from './SynthDelay';
import p5Sound from '../../node_modules/p5/lib/addons/p5.sound.js';p5Sound;
import ctx from 'p5';
window.ctx = ctx;
window.so = ctx.soundOut;
window.p5Sound = p5Sound;

// const ctx = new (window.AudioContext || window.webkitAudioContext)();

class Synth {

  constructor(props) {
    this.notes = [];
    this.oscs = [];
    this.props = props;
    this.delay = new SynthDelay(ctx);
    this.createOscs();

    window.d = this.delay;

    // this.delay.process(ctx.soundOut, .12, .7, 2300);

    window.s = this;
  }

  createOscs() {

    let osc;
    let oscCfg;

    [...Array(synthCfg.osc)].map((x, o) => {

      osc = {};
      oscCfg = this.props.oscs[o];

      osc.voices = new Array(synthCfg.voices);
      osc.type = oscCfg.type;
      osc.octave = oscCfg.octave;
      osc.amplitude = oscCfg.amplitude;

      [...Array(synthCfg.voices)].map((x, v) => {
        osc.voices[v] = new SynthVoice(ctx, oscCfg);
        this.delay.connect(osc.voices[v].osc);
      });

      this.oscs.push(osc);

    });

    window.setVoiceParam = this.setVoiceParam.bind(this);

  }

  update(nextProps) {

    if (!nextProps.isPlaying) {
      if (!this.notes.length) {
        return false;
      } else {
        return this.stopVoices();
      }
    }

    this.checkParam('type', nextProps.oscs);
    this.checkParam('octave', nextProps.oscs);
    this.checkParam('amplitude', nextProps.oscs);

    this.notes = new Array(synthCfg.voices);
    let { notes, amplitude, isPlaying } = nextProps;
    let note, noteNumber;

    if (!isPlaying) {amplitude = 0;}

    for (noteNumber in notes) {
      note = Object.assign({}, notes[noteNumber]);
      note.number = noteNumber;
      this.notes[note.index] = note;
    }

    this.playVoices(this.notes, amplitude);

  }

  playVoices(notes, amplitude) {

    [...Array(synthCfg.voices)].map((x, i) => {
          // console.log('notes', notes);
      if (notes[i]) {
        this.playVoice(i, notes[i], amplitude);
      } else {
        this.stopVoice(i);
      }
    });
  }

  playVoice(i, note, amplitude) {
    this.oscs.map((osc) => {
      osc.voices[i].play(note, amplitude);
    });
  }

  stopVoices() {
    [...Array(synthCfg.voices)].map((x, i) => {
      this.stopVoice(i);
    });
  }

  stopVoice(i) {
    this.oscs.map((osc) => {
      osc.voices[i].stop();
    });
  }

  checkParam(param, props) {
    this.oscs.map((osc,i) => {
      let value = props[i][param];
      if (osc[param] !== value) {
        osc[param] = value;
        this.setVoiceParam(i, param, value);
      }
    });
  }

  setVoiceParam(oscIndex, param, value) {
    this.oscs[oscIndex].voices.map((voice) => {
      voice.setParam(param, value);
    });
  }

}

export default Synth;
