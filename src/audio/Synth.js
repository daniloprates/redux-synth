import SynthVoice from './SynthVoice';
import SynthFx from './SynthFx';
let p5Sound =  require('../utils/p5.sound.js');p5Sound;
import p5 from 'p5';

const OSCS = 2;
const VOICES = 5;

class Synth {

  constructor(cfg) {

    this.cfg = cfg;

    this.notes = [];
    this.voices = [];

    this.fx = new SynthFx(p5, this.cfg.synth);
    this.setVoices();
    this.fx.connect(this.voices, this.cfg.synth);

    window.s = this;

  }

  update(newCfg) {

    let { notes, isPlaying, preset, amplitude } = newCfg.global;
    let { global } = this.cfg;

    if (
      JSON.stringify(newCfg.synth) !== JSON.stringify(this.cfg.synth) ||
      preset !== global.preset ||
      amplitude !== global.amplitude
    ) {
      return this.updateSettings(newCfg);
    } else if (!isPlaying && this.notes.length) {
      return this.stopNotes();
    } else {

      this.notes = new Array(VOICES);
      let note, noteNumber;

      for (noteNumber in notes) {
        note = Object.assign({}, notes[noteNumber]);
        note.number = noteNumber;
        this.notes[note.index] = note;
      }

      this.cfg = newCfg;
      this.playNotes(this.notes);
    }
  }

  setVoices() {
    [].each(OSCS, (oscIndex) => {
      [].each(VOICES, () => {
        this.voices.push(new SynthVoice(p5, oscIndex, this.cfg));
      });
    });
  }

  updateSettings(cfg) {
    this.cfg = cfg;
    this.voices.forEach(voice => voice.update(this.cfg));
    this.fx.update(this.cfg.synth);
  }

  playNotes(notes) {
    [].each(VOICES,(i) => {
      if (notes[i]) {
        this.playNote(i, notes[i]);
      } else {
        this.stopNote(i);
      }
    });
  }

  playNote(i, note) {
    [].each( OSCS , (o) => {
      let v = i + (o * VOICES);
      this.voices[v].play(note);
    });
  }

  stopNotes() {
    this.notes = [];
    this.voices.forEach(voice => voice.stop());
  }

  stopNote(i) {
    this.voices[i].stop();
  }

}

export default Synth;
