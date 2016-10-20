export default {
  synth: {
    // GLOBAL
    notes: {},
    isPlaying: false,
    bpm: 120,
    amplitude: 0.7,

    // KEYBOARD VIEW
    octaves: 2,
    octave: 4,
    velocity: 100,
    scale: 'chromatic',
    root: 0,

    // SYNTH
    synths: [
      {
        amplitude: 0.75,
        type: 'sine',
      },
      {
        amplitude: 0.25,
        type: 'triangle',
      }
    ],

    // MIDI
    channel: 0
  }
};
