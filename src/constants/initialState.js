export default {
  // synth: {
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
        type: 'triangle',
        octave: 1
      }
    ],

    // MIDI
    channel: 0,
  // },

  global: {
    notes: {},
    isPlaying: false,
    bpm: 120,
    amplitude: 0.1,
  },

  keyboard: {
    octaves: 2,
    octave: 4,
    velocity: 100,
    scale: 'chromatic',
    root: 0,
  },

  synth: {
    delay: [],
    oscs: [
      {
        amplitude: 0.75,
        type: 'sine',
        octave: -1
      },
      {
        amplitude: 0.25,
        type: 'triangle',
        octave: 1
      }
    ]
  },

  midi: {
    channel: 0
  }


};
