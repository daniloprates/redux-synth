import React from 'react';
import { keyboardCfg } from '../constants/keyboard';
console.log('keyboardCfg', keyboardCfg);

// let i = 0;
// const isPlaying = ()
const isPlaying = (props, i, o) => {
  return props.notes.indexOf(parseFloat((props.octave + o) + '' + i)) > -1;
};
isPlaying;
// const Key = (i, o) => {
//   <li
//     key={i}
//     data-note={i}
//     data-octave={props.octave + o}
//     className={`is-playing-${isPlaying(props, i, o)}`}
//   />
// }

// const Octave = () => {
//   return (
//     <ul>{[...Array(11)].map((x, i) => <Key key={i} key={i} /> )}</ul>
//   );
// };

const Keyboard = (props) => {
  return (
    <div
      className={`Keyboard octaves-${props.octaves}`}
      onMouseDown={props.onMouseDown.bind(this)}
      onMouseUp={props.onMouseUp.bind(this)}
      onMouseMove={props.onMouseMove.bind(this)}
      >
      {
        [...Array(props.octaves)].map((y, o) => (
          <ul key={o}>
            {
              [...Array(12)].map((y, i) => (
                <li
                  key={i}
                  data-note={i}
                  data-octave={props.octave + o}
                  className={`is-playing-${isPlaying(props, i, o)}`}
                  />
              ))
            }
          </ul>
        ))
      }
    </div>
  );
};

Keyboard.propTypes = {
  onMouseDown: React.PropTypes.func.isRequired,
  onMouseUp: React.PropTypes.func.isRequired,
  onMouseMove: React.PropTypes.func.isRequired,
  octaves: React.PropTypes.number,
  octave: React.PropTypes.number
};

export default Keyboard;
