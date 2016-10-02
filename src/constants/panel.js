export default {
  global: {
    bpm: {
      min: 40,
      max: 200,
      default: 120
    },
    amplitude: {
      min: 0,

    }
  },
  oscillator: {
    octavesLength: 10,
    amplitudeMin: 0,
    amplitudeMax: .9,
    types: [
     'sine',
     'triangle',
     'sawtooth',
     'square'
    ],
    pan: {
      min: -1,
      max: 1,
      default: 0
    },
    phase: {
      min: 0,
      max: 1,
      default: 0
    }
  },
  reverb: {
    seconds: {
      min: 0,
      max: 10,
      default: 3
    },
    decay: {
      min: 0,
      max: 100,
      default: 2,
    },
    reverse: {
      default: false
    }
  },
  delay: {
    time: {
      min: 0,
      max: 1,
      default: 0
    },
    feedback: {
      min: 0
    },
    lowPass: {

    },
    cutoffFreq: {
      min: 0
    },
    cutoffRes: {
      min: 0
    },
    type: {
      default: 0,
      types: {
        default: 0,
        pingPong: 1
      }
    },
    amp: {
      volume: {
        min: 0,
        max: 1
      },
      rampTime: {

      },
      timeFromNow: {

      }
    }

  }
};
