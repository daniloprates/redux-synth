import { Component, PropTypes } from 'react';
import { notesMidi } from '../constants/notes';
import SynthOsc from './SynthOsc';
import { oscCfg } from '../constants/oscillator';

class Oscillator extends Component {
  constructor(props) {
    super(props);
    this.notes = {};
    this.synthOsc = new SynthOsc(props);
  }

  componentWillReceiveProps(nextProps) {

    this.synthOsc.resetVoices();
    let activeVoices = new Array(oscCfg.voices);
    let { notes, amplitude, isPlaying } = nextProps;
    let note, noteNumber;

    if (!isPlaying) {amplitude = 0;}

    for (noteNumber in notes) {

      note = Object.assign({}, notes[noteNumber], notesMidi[noteNumber]);
      let voice = activeVoices[note.index];

      if (note.frequency) {
        voice.note = note;
      }

      activeVoices[note.index] = voice;

    }

    this.synthOsc.playNotes(activeVoices, amplitude);

  }

  render() {
    return false;
  }
}

Oscillator.propTypes = {
  type: PropTypes.string,
  notes: PropTypes.object,
  amplitude: PropTypes.number
};

export default Oscillator;
