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

  // ENVELOPE
  env_attackLevel: 1,
  env_releaseLevel: 0,
  env_attackTime: .5,
  env_decayTime: .2,
  env_susPercent: .2,
  env_releaseTime: .5,

  // FILTER
  flt_type: 'lowpass',
  flt_frequency: 10000,
  flt_resonance: 20,

  // DELAY
  dly_amp: 0.5,
  dly_time: 0.3,
  dly_feedback: 0.3,
  dly_filter: 2300,

  // REVERB
  rev_amp: 0.5,
  rev_seconds: 3,
  rev_decay: 2,
  rev_reverse: false,


};
