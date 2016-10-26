


/**
 * `map` function from p5.js lib
 * https://github.com/processing/p5.js/blob/master/src/math/calculation.js
 *
 * Re-maps a number from one range to another.
 * <br><br>
 * In the first example above, the number 25 is converted from a value in the
 * range of 0 to 100 into a value that ranges from the left edge of the
 * window (0) to the right edge (width).
 *
 * @method map
 * @param  {Number} value  the incoming value to be converted
 * @param  {Number} start1 lower bound of the value's current range
 * @param  {Number} stop1  upper bound of the value's current range
 * @param  {Number} start2 lower bound of the value's target range
 * @param  {Number} stop2  upper bound of the value's target range
 * @return {Number}        remapped number
 * @example
 *   <div><code>
 *     var value = 25;
 *     var m = map(value, 0, 100, 0, width);
 *     ellipse(m, 50, 10, 10);
 *   </code></div>
 *
 *   <div><code>
 *     function setup() {
 *       noStroke();
 *     }
 *
 *     function draw() {
 *       background(204);
 *       var x1 = map(mouseX, 0, width, 25, 75);
 *       ellipse(x1, 25, 25, 25);
 *       var x2 = map(mouseX, 0, width, 0, 100);
 *       ellipse(x2, 75, 25, 25);
 *     }
 *   </code></div>
 *
 * @alt
 * 10 by 10 white ellipse with in mid left canvas
 * 2 25 by 25 white ellipses move with mouse x. Bottom has more range from X
 *
 */
export const map = (n, start1, stop1, start2, stop2) => {
  return ((n-start1)/(stop1-start1))*(stop2-start2)+start2;
};


export const updateOctave = (notes,octave) => {
  return notes.map(note => parseFloat(octave + '' + note.toString().slice(1)));
};


export const getDelayTime = (bpm, divBy) => {
  divBy;
  return (bpm/2*1000)/120/2;

};
