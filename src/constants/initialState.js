

export const initGlobal = {
  notes: {},
  isPlaying: false,
  bpm: 120,
  amplitude: 0.7,
  rec_active: false,
  preset: 'Piano'
};

export const initKeyboard = {
  octaves: 2,
  octave: 4,
  velocity: 100,
  scale: 'chromatic',
  root: 0,
  showNotes: false,
  // loaded dinamicaly
  // length: 12,
  // keys: [],
  // compKeys: {}
};

export const initMidi = {
  status: 1,
  channel: 0,
  controllers: []
};

// THE SYNTH STATE IS LOADED FROM THE PRESETS
// export const initSynth = {};
