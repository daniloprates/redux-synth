export default {
  synth: {
    // NOTES
    notes: {},
    isPlaying: false,

    // KEYBOARD VIEW
    octaves: 2,
    octave: 4,
    velocity: 100,
    scale: 'chromatic',
    root: 0,

    // SYNTH
    amplitude: 0,
    type: 'sine',
    bpm: 120,
    synths: [],

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
