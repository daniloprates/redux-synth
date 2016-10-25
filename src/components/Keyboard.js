import React, { PropTypes } from 'react';
import Key from './KeyboardKey';

const Keyboard = (props) => {
  let { keys, octaves, scale, octave } = props.keyboard;

  return (

      <div
        className={`Keyboard octaves-${octaves} ${scale == 'chromatic' ? 'chromatic' : ''}`}
        onMouseDown={props.onMouseDown.bind(this)}
        onMouseUp={props.onMouseUp.bind(this)}
        onMouseMove={props.onMouseMove.bind(this)}
        >
          {
            [...Array(octaves)].map((y, o) => (
              <ul key={o}>
                {
                  [...Array(12)].map((x, i) => (
                    <Key
                      key={i}
                      i={i}
                      o={octave + o}
                      data-octave={keys[`octave${i}`]}
                      className={keys[`className${i}`]}
                      keys={keys}
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
  onMouseDown: PropTypes.func.isRequired,
  onMouseUp: PropTypes.func.isRequired,
  onMouseMove: PropTypes.func.isRequired,
  octaves: PropTypes.number,
  octave: PropTypes.number,
  keyboard: PropTypes.object,
  scale: PropTypes.string
};

export default Keyboard;
