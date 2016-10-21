export const initGlobal = {
  notes: {},
  isPlaying: false,
  bpm: 120,
  amplitude: 0.7
};

export const initKeyboard = {
  octaves: 2,
  octave: 4,
  velocity: 100,
  scale: 'chromatic',
  root: 0,
  showNotes: false
};

export const initMidi = {
  status: 1,
  channel: 0,
  controllers: []
};

export const initSynth = {

  // OSCs
  oscs: 2,
  voices: 5,
  osc_type0: 'sine',
  osc_amplitude0: 0.75,
  osc_octave0: 0,
  osc_type1: 'triangle',
  osc_amplitude1: 0.25,
  osc_octave1: 0,

  // DELAY
  dly_amp: 0.5,
  dly_time: 0.3,
  dly_feedback: 0.3,
  dly_filter: 2300,

  // REVERB
  rev_seconds: 3,
  rev_decay: 2,

  // FILTER
  flt_type: 'lowpass',
  flt_param1: 10000,
  flt_param2: 20

};

export default {
  app: {
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
    synth: {
      oscs: [
        {
          type: 'sine',
          amplitude: 0.75,
          octave: -1
        },
        {
          type: 'triangle',
          amplitude: 0.25,
          octave: 1
        }
      ],
      delay: {
        amp: 0,
        time: .11,
        feedback: .7,
        filter: 2300,
      },
      reverb: {
        seconds: 3,
        decay: 2
      },
      filter: {

      }


      // delay: [.11, .7, 2300],
      // reverb: [3, 2],
      // filter: [10000, 20],
    },

    // MIDI
    channel: 0
  }

  // global: {
  //   notes: {},
  //   isPlaying: false,
  //   bpm: 120
  // },

  // keyboard: {
  //   octaves: 2,
  //   octave: 4,
  //   velocity: 100,
  //   scale: 'chromatic',
  //   root: 0,
  // },

  // synths: [],

  // midi: {
  //   channel: 0
  // }


};
