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
    oscs: [
      {
        amplitude: 0.75,
        type: 'sine',
        octave: -1
      },
      {
        amplitude: 0.25,
        type: 'sawtooth',
        octave: 1
      }
    ],

    // MIDI
    channel: 0
  },

  global: {
    notes: {},
    isPlaying: false,
    bpm: 120
  },

  keyboard: {
    octaves: 2,
    octave: 4,
    velocity: 100,
    scale: 'chromatic',
    root: 0,
  },

  synths: [],

  midi: {
    channel: 0
  }


};
