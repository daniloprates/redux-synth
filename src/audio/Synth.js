import SynthVoice from './SynthVoice';
import SynthDelay from './SynthDelay';
import SynthEnvelope from './SynthEnvelope';
import SynthReverb from './SynthReverb';
import SynthFilter from './SynthFilter';
import p5Sound from '../../node_modules/p5/lib/addons/p5.sound.js';p5Sound;
import ctx from 'p5';

class Synth {

  constructor(props) {
    this.props = props;
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

  update(nextProps) {

    if (JSON.stringify(nextProps.synth) !== JSON.stringify(this.cfg)) {
      return this.updateSettings(nextProps.synth);
    } else if (!nextProps.global.isPlaying) {
      if (!this.notes.length) {
        return false;
      } else {
        return this.stopNotes();
      }
    }

    this.notes = new Array(this.cfg.voices);
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
    [].each(this.cfg.voices,() => {
      this.envs.push(new SynthEnvelope(ctx, this.cfg));
    });
  }

  setVoices() {

    [].each(this.cfg.oscs, (o) => {
      [].each(this.cfg.voices, (v) => {
        this.voices.push(new SynthVoice(ctx, o, this.cfg, this.envs[v].env));
      });
    });

  }

  updateSettings(cfg) {
    this.cfg = cfg;
    this.envs.forEach(env => env.update(this.cfg));
    this.voices.forEach(voice => voice.update(this.cfg));
    this.delay.update(this.cfg);
    this.reverb.update(this.cfg);
    this.filter.update(this.cfg);
  }

  playNotes(notes, amplitude) {
    [].each(this.cfg.voices,(i) => {
      if (notes[i]) {
        this.playNote(i, notes[i], amplitude);
      } else {
        this.stopNote(i);
      }
    });
  }

  playNote(i, note, amplitude) {
    [].each( this.cfg.oscs , (o) => {
      let v = i + (o * this.cfg.voices);
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
