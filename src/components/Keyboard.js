import React, { PropTypes } from 'react';
import Key from './KeyboardKey';

const Keyboard = (props) => {
  let { keys, octaves, scale, length } = props.keyboard;

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
                  [...Array(length)].map((x, i) => (
                    <Key
                      key={i}
                      data-octave={keys[`octave${i}`]}
                      className={keys[`className${i}`]}
                      note={keys[`note${i + (o * length)}`]}
                      notes={props.global.notes}
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
