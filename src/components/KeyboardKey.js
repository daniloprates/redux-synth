import React, { PropTypes } from 'react';

let isPlaying;

const KeyboardKey = (props) => {

  if (props.className && props.notes) {

    isPlaying = ' is-playing-' + !!props.notes[props.note];

    return (
        <li
          data-octave={props.octave}
          data-note={props.note}
          className={props.className + isPlaying}
          />
    );
  } else {
    return false;
  }
};

KeyboardKey.propTypes = {
  className: PropTypes.string,
  note: PropTypes.number,
  octave: PropTypes.object,
  notes: PropTypes.object,
  i: PropTypes.number,
  o: PropTypes.number,
  keys: PropTypes.object
};

export default KeyboardKey;



