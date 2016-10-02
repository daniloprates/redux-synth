import React from 'react';
import { keyboardCfg } from '../constants/keyboard';
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
        <li
          data-note="11"
          data-octave={props.octave - 1}
          />
        {
          // LOOP THROUGH THE OCTAVES
          [...Array(props.octaves)].map((x, o) =>
            // LOOP THROUGH THE KEYS
            keyboardCfg.octaveKeys.map((key, i) =>
                <li
                  key={i}
                  data-note={i}
                  data-octave={props.octave + o}
                  className={`is-sharp-${key.isSharp} next-sharp-${key.nextSharp} prev-sharp-${key.prevSharp}`}
                  />
            )
          )
        }
        <li
          data-note="0"
          data-octave={props.octave + props.octaves}
          className="next-sharp-true"
          />
      </ul>

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
