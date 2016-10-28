import SynthVoice from './SynthVoice';
import SynthFx from './SynthFx';
let p5Sound =  require('../utils/p5.sound.js');p5Sound;
import p5 from 'p5';

const OSCS = 2;
// const VOICES = 5;
const VOICES = 4;

window.p5 = p5;

class Synth {

  constructor() {

    this.cfg = {};

    this.notes = [];
    this.voices = [];
    this.notesPlaying = {};
    this.oscsPlaying = {};

    this.availableOscs = [];
    this.unavailableOscs = [];

    [...Array(VOICES)].map((x,i) => {
      this.availableOscs[i] = i;
    });

  }

  init(cfg) {

    this.cfg = cfg;
    this.fx = new SynthFx(p5, this.cfg);
    this.setVoices();
    this.fx.connect(this.voices, this.cfg.synth);

    window.s = this;

  }

  setVoices() {
    [].each(OSCS, (oscIndex) => {
      [].each(VOICES, () => {
        this.voices.push(new SynthVoice(p5, oscIndex, this.cfg));
      });
    });
  }

  update(cfg) {

    if (this.unavailableOscs.length) {
      return false;
    }

    if (!cfg.global) {
      console.warn('no global');
      return false;
    }

    let { preset, amplitude, bpm } = cfg.global;
    let { global } = this.cfg;

    if (
      JSON.stringify(cfg.synth) !== JSON.stringify(this.cfg.synth) ||
      preset !== global.preset ||
      amplitude !== global.amplitude ||
      bpm !== global.bpm
    ) {
      this.cfg = cfg;
      this.voices.forEach(voice => voice.update(this.cfg));
      this.fx.update(this.cfg);
    }
  }

  /**
   * Get the next available OSC for the new note
   * Set it unavailable
   */
  getAvailableOsc() {

    if (this.unavailableOscs.length === VOICES) {
      this.stop(Object.keys(this.notesPlaying)[0]);
    }

    let osc = this.availableOscs.splice(0,1)[0];
    this.unavailableOscs.push(osc);
    return osc;

  }

  /**
   * Set the stopped note's OSC available again
   */
  setAvailableOsc(osc) {
    let pos = this.unavailableOscs.indexOf(osc);
    osc = this.unavailableOscs.splice(pos,1)[0];
    this.availableOscs.push(osc);
  }

  /**
   * Play a note
   */
  play(note, velocity=100, channel=0) {

    let osc = this.getAvailableOsc();

    // OSC 1
    this.voices[osc].play(note, velocity, channel);
    // OSC 2
    this.voices[osc+VOICES].play(note, velocity, channel);
    this.notesPlaying[note] = osc;

  }

  /**
   * Stop a note
   * Makes its OSC available again
   */
  stop(note) {

    // Note that has already being taken by a new note
    // when more than `VOICES` notes are playing at same time
    if (typeof this.notesPlaying[note] === 'undefined') {
      return false;
    }

    let osc = this.notesPlaying[note];
    delete this.notesPlaying[note];
    this.setAvailableOsc(osc);
    this.voices[osc].stop();
    this.voices[osc+VOICES].stop();
  }

  stopAll() {

    Object.keys(this.notesPlaying).map(note => {
      this.stop(note);
    });

  }

}

let synth = new Synth();

export default synth;
