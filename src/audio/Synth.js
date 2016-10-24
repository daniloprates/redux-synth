import SynthVoice from './SynthVoice';
import SynthDelay from './SynthDelay';
import SynthEnvelope from './SynthEnvelope';
import SynthReverb from './SynthReverb';
import SynthFilter from './SynthFilter';
import p5Sound from '../../node_modules/p5/lib/addons/p5.sound.js';p5Sound;
import ctx from 'p5';

const OSCS = 2;
const VOICES = 5;

class Synth {

  constructor(props, theme) {
    this.props = props;
    this.theme = theme;

    this.cfg = props.synth;

    this.notes = [];
    this.envs = [];
    this.voices = [];

    this.delay = new SynthDelay(ctx, this.cfg);
    this.reverb = new SynthReverb(ctx, this.cfg);
    this.filter = new SynthFilter(ctx, this.cfg);

    this.setEnvs();
    this.setVoices();

    this.delay.connect(this.voices, this.cfg);
    this.reverb.connect(this.voices);
    // this.filter.connect(this.voices, this.cfg);

    window.s = this;

  }

  update(nextProps, theme) {

    if (
      JSON.stringify(nextProps.synth) !== JSON.stringify(this.cfg) ||
      theme !== this.theme
    ) {
      return this.updateSettings(nextProps.synth);
    } else if (!nextProps.global.isPlaying) {
      if (!this.notes.length) {
        return false;
      } else {
        return this.stopNotes();
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

    this.playNotes(this.notes, amplitude);

  }

  setEnvs() {
    [].each(VOICES,() => {
      this.envs.push(new SynthEnvelope(ctx, this.cfg));
    });
  }

  setVoices() {

    [].each(OSCS, (o) => {
      [].each(VOICES, (v) => {
        this.voices.push(new SynthVoice(ctx, o, this.cfg, this.envs[v].env));
      });
    });

  }

  updateSettings(cfg) {
    this.cfg = cfg;
    this.theme = this.props.global.theme;
    this.envs.forEach(env => env.update(this.cfg));
    this.voices.forEach(voice => voice.update(this.cfg));
    this.delay.update(this.cfg);
    this.reverb.update(this.cfg);
    this.filter.update(this.cfg);
  }

  playNotes(notes, amplitude) {
    [].each(VOICES,(i) => {
      if (notes[i]) {
        this.playNote(i, notes[i], amplitude);
      } else {
        this.stopNote(i);
      }
    });
  }

  playNote(i, note, amplitude) {
    [].each( OSCS , (o) => {
      let v = i + (o * VOICES);
      this.voices[v].play(note);
    });
    this.envs[i].play(amplitude);
  }

  stopNotes() {
    this.envs.forEach(env => env.stop());
  }

  stopNote(i) {
    this.envs[i].stop();
  }

}

export default Synth;
