export default {

  /*
  osc = Oscs
  env = Envelope
  flt = Filter
  dly = Delay
  rev = Reverb
  dst = Distortion
  lfo = LFO
  */

  piano: {
    "osc_type0": "triangle",
    "osc_amplitude0": 0.75,
    "osc_octave0": 0,
    "osc_lfoEnv0": 0,
    "osc_type1": "triangle",
    "osc_amplitude1": 0.25,
    "osc_octave1": 0,
    "osc_lfoEnv1": 1,
    "env_attackLevel": 0,
    "env_releaseLevel": 0,
    "env_attackTime": 0.01,
    "env_decayTime": 0.98,
    "env_susPercent": 0,
    "env_releaseTime": 0.13,
    "flt_type": "lowpass",
    "flt_frequency": 3123.7999999999997,
    "flt_resonance": 0.001,
    "flt_lfoEnv": 0,
    "dly_amp": 1,
    "dly_type": "sync",
    "dly_divBy": 4,
    "dly_time": 0.3,
    "dly_feedback": 0.30800000000000005,
    "dly_filter": 2300,
    "rev_amp": 1,
    "rev_seconds": 2,
    "rev_decay": 7,
    "rev_reverse": false,
    "dst_active": "off",
    "dst_amount": 0.01,
    "lfo_oscType": "sine",
    "lfo_oscFreq": 0.44999999999999996,
    "lfo_fltType": "sawtooth",
    "lfo_fltFreq": 6.0499999999999945
  },

  Strings : {
    "osc_type0": "sine",
    "osc_amplitude0": 0.94,
    "osc_octave0": 0,
    "osc_lfoEnv0": 12,
    "osc_type1": "triangle",
    "osc_amplitude1": 0.06,
    "osc_octave1": -1,
    "osc_lfoEnv1": 27,
    "env_attackLevel": 0,
    "env_releaseLevel": 0,
    "env_attackTime": 0.68,
    "env_decayTime": 0.62,
    "env_susPercent": 0.95,
    "env_releaseTime": 0.96,
    "flt_type": "lowpass",
    "flt_frequency": 12000,
    "flt_resonance": 0.001,
    "flt_lfoEnv": 0,
    "dly_amp": 0.77,
    "dly_type": "sync",
    "dly_divBy": 0.5,
    "dly_time": 0.64,
    "dly_feedback": 0.524,
    "dly_filter": 2300,
    "rev_amp": 0.87,
    "rev_seconds": 4,
    "rev_decay": 2,
    "rev_reverse": false,
    "dst_active": "off",
    "dst_amount": 0.01,
    "lfo_oscType": "square",
    "lfo_oscFreq": 12,
    "lfo_fltType": "sine",
    "lfo_fltFreq": 0.5
  },

  Contemplative : {
    "osc_type0": "sine",
    "osc_amplitude0": 0.75,
    "osc_octave0": -1,
    "osc_lfoEnv0": 0,
    "osc_type1": "triangle",
    "osc_amplitude1": 0.25,
    "osc_octave1": 1,
    "osc_lfoEnv1": 0,
    "env_attackLevel": 0,
    "env_releaseLevel": 0,
    "env_attackTime": 0.74,
    "env_decayTime": 0.4,
    "env_susPercent": 0.62,
    "env_releaseTime": 0.4,
    "flt_type": "lowpass",
    "flt_frequency": 7000,
    "flt_resonance": 0.001,
    "flt_lfoEnv": 0,
    "dly_amp": 0.01,
    "dly_type": "sync",
    "dly_divBy": 1,
    "dly_time": 0.7,
    "dly_feedback": 0.3,
    "dly_filter": 2300,
    "rev_amp": 0.7,
    "rev_seconds": 5,
    "rev_decay": 3,
    "rev_reverse": false,
    "dst_active": 'off',
    "dst_amount": 0.01,
    "lfo_oscType": "square",
    "lfo_oscFreq": 12,
    "lfo_fltType": "sine",
    "lfo_fltFreq": 0.5
  },

  Organ: {
    "osc_type0": "sawtooth",
    "osc_amplitude0": 0.63,
    "osc_octave0": 0,
    "osc_lfoEnv0": 0,
    "osc_type1": "sine",
    "osc_amplitude1": 0.37,
    "osc_octave1": -1,
    "osc_lfoenv": 0,
    "osc_lfoEnv1": 0,
    "env_attackLevel": 0,
    "env_releaseLevel": 0,
    "env_attackTime": 0.07,
    "env_decayTime": 0.15,
    "env_susPercent": 1,
    "env_releaseTime": 0.2,
    "flt_type": "lowpass",
    "flt_frequency": 1204.5,
    "flt_resonance": 8.00068,
    "flt_lfoEnv": 0,
    "dly_amp": 0.01,
    "dly_type": "sync",
    "dly_divBy": 1,
    "dly_time": 0.3,
    "dly_feedback": 0.3,
    "dly_filter": 2300,
    "rev_amp": 0.05,
    "rev_seconds": 1,
    "rev_decay": 2,
    "rev_reverse": false,
    "dst_active": 'post',
    "dst_amount": 0.9,
    "lfo_oscType": "square",
    "lfo_oscFreq": 12,
    "lfo_fltType": "sine",
    "lfo_fltFreq": 0.5
  },

  "Distort Organ": {
    "osc_type0": "sine",
    "osc_amplitude0": 0.63,
    "osc_octave0": 0,
    "osc_lfoEnv0": 0,
    "osc_type1": "sine",
    "osc_amplitude1": 0.37,
    "osc_octave1": -1,
    "osc_lfoenv": 0,
    "osc_lfoEnv1": 3,
    "env_attackLevel": 0,
    "env_releaseLevel": 0,
    "env_attackTime": 0.21,
    "env_decayTime": 0.15,
    "env_susPercent": 1,
    "env_releaseTime": 0.2,
    "flt_type": "lowpass",
    "flt_frequency": 1804.25,
    "flt_resonance": 28.35004000000001,
    "flt_lfoEnv": 637,
    "dly_amp": 0.01,
    "dly_type": "sync",
    "dly_divBy": 1,
    "dly_time": 0.3,
    "dly_feedback": 0.3,
    "dly_filter": 2300,
    "rev_amp": 0.1,
    "rev_seconds": 1,
    "rev_decay": 2,
    "rev_reverse": false,
    "dst_active": "post",
    "dst_amount": 0.01,
    "lfo_oscType": "square",
    "lfo_oscFreq": 12,
    "lfo_fltType": "sine",
    "lfo_fltFreq": 0.5
  },

  "Tremolo" : {
    "osc_type0": "sine",
    "osc_amplitude0": 0.75,
    "osc_octave0": 0,
    "osc_lfoEnv0": 13,
    "osc_type1": "sawtooth",
    "osc_amplitude1": 0.25,
    "osc_octave1": 0,
    "osc_lfoEnv1": 6,
    "env_attackLevel": 0,
    "env_releaseLevel": 0,
    "env_attackTime": 0.01,
    "env_decayTime": 0.4,
    "env_susPercent": 0.61,
    "env_releaseTime": 0.4,
    "flt_type": "lowpass",
    "flt_frequency": 1434.45,
    "flt_resonance": 0.001,
    "flt_lfoEnv": 975,
    "dly_amp": 0.01,
    "dly_type": "sync",
    "dly_divBy": 1,
    "dly_time": 0.3,
    "dly_feedback": 0.3,
    "dly_filter": 2300,
    "rev_amp": 0.27,
    "rev_seconds": 3,
    "rev_decay": 2,
    "rev_reverse": false,
    "dst_active": "off",
    "dst_amount": 0.01,
    "lfo_oscType": "square",
    "lfo_oscFreq": 12,
    "lfo_fltType": "sine",
    "lfo_fltFreq": 0.5
  },

  "Nostalgia": {
    "category": "pad",
    "osc_type0": "sawtooth",
    "osc_amplitude0": 0.75,
    "osc_octave0": 0,
    "osc_lfoEnv0": 4,
    "osc_type1": "triangle",
    "osc_amplitude1": 0.25,
    "osc_octave1": -1,
    "osc_lfoEnv1": 4,
    "env_attackLevel": 0,
    "env_releaseLevel": 0,
    "env_attackTime": 0.24,
    "env_decayTime": 0.4,
    "env_susPercent": 0.82,
    "env_releaseTime": 0.17,
    "flt_type": "lowpass",
    "flt_frequency": 1304.5,
    "flt_resonance": 0.001,
    "flt_lfoEnv": 78,
    "dly_amp": 0.01,
    "dly_type": "sync",
    "dly_divBy": 1,
    "dly_time": 0.3,
    "dly_feedback": 0.3,
    "dly_filter": 2300,
    "rev_amp": 1,
    "rev_seconds": 10,
    "rev_decay": 8,
    "rev_reverse": false,
    "dst_active": "off",
    "dst_amount": 0.01,
    "lfo_oscType": "sine",
    "lfo_oscFreq": 2.4,
    "lfo_fltType": "sine",
    "lfo_fltFreq": 1.999999999999995
  }








};
