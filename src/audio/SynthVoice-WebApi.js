import { map } from '../utils';
import { notesMidi } from '../constants/notes';

class SynthOscVoice {
  constructor(ctx, props) {
    this.ctx = ctx;

    this.gainNode = ctx.createGain();
    this.gainNode.connect(ctx.destination);
    this.gainNode.gain.value = 0;

    this.osc = ctx.createOscillator();

    // Voice props from initialState
    this.osc.type = props.type;
    this.osc.amplitude = props.amplitude;
    this.osc.octave = props.octave;

    this.osc.detune.value = 0;
    this.osc.connect(this.gainNode);
    this.osc.start(0);
    // this.osc.start(ctx.currentTime);

  }

  play(note, amplitude) {

    // Get the note acording to the osc octave
    let noteNumber = parseInt(note.number) + (12 * this.osc.octave);

    note = Object.assign({}, note, notesMidi[noteNumber]);

    // this.osc.frequency.value = note.frequency;
    // this.osc.frequency.setValueAtTime( note.frequency, 0 );
    // this.osc.frequency.exponentialRampToValueAtTime( note.frequency, 0 );

    this.osc.frequency.cancelScheduledValues(0);
    this.osc.frequency.setValueAtTime(note.frequency, 0.2);

    // Merge the note velocity with the osc amplitude
    let gain = map(note.velocity, 0, 127, 0, this.osc.amplitude);

    // Merge it again with the main synth amplitude
    gain = map(amplitude, 0, 1, 0, amplitude);

    this.gainNode.gain.value = gain;
    // this.gainNode.gain.setValueAtTime(gain, 1);
  }

  stop() {
    this.gainNode.gain.value = 0;
    // this.gainNode.gain.setValueAtTime(0, 1);
  }

  setParam(param, value, object='osc') {
    this[object][param] = value;
  }

}

export default SynthOscVoice;
