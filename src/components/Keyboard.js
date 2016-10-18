import React from 'react';
import { notesMidi } from '../constants/notes';

// let i = 0;
// const isPlaying = ()
const isPlaying = (props, note) => {
  return !!props.notes[note];
};
isPlaying;
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
                  data-note={i + (12 * (props.octave + o))}
                  data-octave={props.octave + o}
                  className={`is-playing-${isPlaying(props, i + (12 * (props.octave + o)))} ${notesMidi[i].isSharp ? 'black' : 'white'}-key`}
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
