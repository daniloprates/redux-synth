import p5 from 'p5';
import p5Sound from '../../node_modules/p5/lib/addons/p5.sound.js';


class OscillatorWave {
  constructor(props) {
    // console.log('this', this);
    // console.log('typeof createCanvas', typeof createCanvas);
    // console.log('typeof this.createCanvas', typeof this.createCanvas);
    function setup() {
        // console.log('setup', createCanvas);
      createCanvas()
    }

    this.p5 = new p5;
    setup();
  }

  update(props) {

  }


}

export default OscillatorWave;

// window.p5 = p5;
// window.p5Sound = p5Sound;

// var canvas;

// function setup() {
//   canvas = createCanvas(100, 50);
//   console.log('canvas', canvas);
//   background('pink');
// }

// function draw() {

// }

// function update() {

// }




// export default update;
