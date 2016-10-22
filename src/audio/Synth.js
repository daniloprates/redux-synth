// import { notesMidi } from '../constants/notes';
// import { synthCfg } from '../constants/synth';
import SynthVoice from './SynthVoice';
import SynthDelay from './SynthDelay';
import SynthReverb from './SynthReverb';
import p5Sound from '../../node_modules/p5/lib/addons/p5.sound.js';p5Sound;
import ctx from 'p5';

// const OSCS = 2;
const VOICES = 5;

class Synth {

  constructor(props) {
    this.props = props;
    this.settings = props.synth;
    this.notes = [];
    this.oscs = [];

    // DELAY
    this.delay = new SynthDelay(ctx);
    this.reverb = new SynthReverb(ctx);
    this.setOsc(0);
    this.setOsc(1);
    this.delay.update(.5, .11, .7, 2300);
  }

  update(nextProps) {

    if (JSON.stringify(nextProps.synth) !== JSON.stringify(this.settings)) {
      return this.updateSettings(nextProps.synth);
    } else if (!nextProps.global.isPlaying) {
      if (!this.notes.length) {
        return false;
      } else {
        return this.stopVoices();
      }
    }

    this.notes = new Array(VOICES);
    let { notes, amplitude, isPlaying } = nextProps.global;
    let note, noteNumber;

    if (!isPlaying) {amplitude = 0;}

    for (noteNumber in notes) {
      note = Object.assign({}, notes[noteNumber]);
      note.number = noteNumber;
      this.notes[note.index] = note;
    }

    this.playVoices(this.notes, amplitude);

  }

  setOsc(i) {

    let cfg = this.settings;
    let osc = {};

    osc.voices = new Array(VOICES);
    osc.type = cfg[`osc_type${i}`];
    osc.octave = cfg[`osc_octave${i}`];
    osc.amplitude = cfg[`osc_amplitude${i}`];

    [...Array(cfg.voices)].map((x, v) => {
      osc.voices[v] = new SynthVoice(ctx, osc);
      this.delay.connect(osc.voices[v].osc);
      this.reverb.connect(osc.voices[v].osc);
    });

    this.oscs.push(osc);

  }

  updateOsc(i) {

    let cfg = this.settings;
    let osc = this.oscs[i];

    osc.type = cfg[`osc_type${i}`];
    osc.octave = cfg[`osc_octave${i}`];
    osc.amplitude = cfg[`osc_amplitude${i}`];

    [...Array(cfg.voices)].map((x, v) => {
      osc.voices[v].update(osc);
      // this.delay.connect(osc.voices[v].osc);
    });

  }

  updateSettings(settings) {

    this.settings = settings;

    // for (let param in settings) {
    //   // console.log('param', param);
    // }

    this.updateOsc(0);
    this.updateOsc(1);
    this.delay.update(
      settings.dly_amp,
      settings.dly_time,
      settings.dly_feedback,
      settings.dly_filter
    );

    /**
      TODO:
      - UPDATE:
      - Reverb
      - Filter
     */
  }


  playVoices(notes, amplitude) {

    [...Array(VOICES)].map((x, i) => {
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
    [...Array(VOICES)].map((x, i) => {
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
