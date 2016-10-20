import { oscCfg } from '../constants/oscillator';

class SynthOscVoice {
  constructor(ctx) {
    this.ctx = ctx;

    this.gainNode = ctx.createGain();
    this.gainNode.connect(ctx.destination);
    this.gainNode.gain.value = 0;

    this.osc = ctx.createOscillator();
    this.osc.type = oscCfg.type;
    this.osc.detune.value = 0;
    this.osc.connect(this.gainNode);
    this.osc.start(ctx.currentTime);

  }

  play(note, amplitude) {
    this.osc.frequency.value = note.frequency;
    this.gainNode.gain.value = amplitude;

    osc.frequency.value = (note.frequency);

    amplitude = map(note.velocity, 0, 127, 0, amplitude);

    if (osc.f != amplitude) {
      this.setVolume(osc, amplitude, 0.2);
    }





    //     if (osc.note != noteNumber) {
    //       osc.note = noteNumber;
    //       this.playNote(note, osc, amplitude);
    //     }
    // delay;
    // this.gainNode.gain.value = amp;

    // this.osc.forEach(osc => {
    //   if (!osc.isActive) {
    //     this.resetOsc(osc);
    //   }
    // });


  }

  stop() {
    this.gainNode.gain.value = 0;
  }

}

export default SynthOscVoice;
