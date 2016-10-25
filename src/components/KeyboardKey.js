import React, { PropTypes } from 'react';

let note, isPlaying;

const KeyboardKey = (props) => {

  note = props.i + (12 * props.o);
  isPlaying = ' is-playing-' + props.keys[`playing${note}`];

  if (props.className) {
    return (
        <li
          data-octave={props.octave}
          data-note={note}
          className={props.className + isPlaying}
          />
    );
  } else {
    return false;
  }
};

KeyboardKey.propTypes = {
  className: PropTypes.string,
  octave: PropTypes.object,
  i: PropTypes.number,
  o: PropTypes.number,
  keys: PropTypes.object
};

export default KeyboardKey;



