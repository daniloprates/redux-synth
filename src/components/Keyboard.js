import React from 'react';
import { keyboardCfg } from '../constants/notes';
console.log('keyboardCfg', keyboardCfg);

// let i = 0;

const Keyboard = (props) => {
  return (
    <div className={`Keyboard octaves-${props.octaves}`}>
      <ul
        onMouseDown={props.onMouseDown.bind(this)}
        onMouseUp={props.onMouseUp.bind(this)}
        onMouseMove={props.onMouseMove.bind(this)}
        >
        {
          // LOOP THROUGH THE OCTAVES
          [...Array(props.octaves)].map((x, o) =>
            // LOOP THROUGH THE KEYS
            keyboardCfg.map((key, i) =>
                <li
                  key={i}
                  data-note={i - 1}
                  data-octave={o}
                  className={`is-sharp-${key.isSharp} next-sharp-${key.nextSharp} prev-sharp-${key.prevSharp}`}
                  />
            )
          )
        }
      </ul>

    </div>
  );
};

Keyboard.propTypes = {
  onMouseDown: React.PropTypes.func.isRequired,
  onMouseUp: React.PropTypes.func.isRequired,
  onMouseMove: React.PropTypes.func.isRequired,
  octaves: React.PropTypes.number
};

export default Keyboard;
