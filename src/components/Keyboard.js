import React, { PropTypes } from 'react';
import Key from './KeyboardKey';

const Keyboard = (props) => {
  let { keys, octaves, scale, length } = props.keyboard;

  return (
      <div
        onKeyDown={props.onKeyDown.bind(this)}
        onKeyUp={props.onKeyUp.bind(this)}

        onTouchStart={props.onMouseDown.bind(this)}
        onTouchEnd={props.onMouseUp.bind(this)}
        onTouchCancel={props.onMouseUp.bind(this)}
        onTouchMove={props.onMouseMove.bind(this)}

        onMouseDown={props.onMouseDown.bind(this)}
        onMouseUp={props.onMouseUp.bind(this)}
        onMouseMove={props.onMouseMove.bind(this)}

        className={`keyboard-container octaves-${octaves} ${scale == 'chromatic' ? 'chromatic' : ''}`}
        >
          <div className="Keyboard">
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
      </div>

    );
};

Keyboard.propTypes = {
  onKeyDown: PropTypes.func,
  onKeyUp: PropTypes.func,
  onMouseDown: PropTypes.func,
  onMouseUp: PropTypes.func,
  onMouseMove: PropTypes.func,
  octaves: PropTypes.number,
  octave: PropTypes.number,
  keyboard: PropTypes.object,
  scale: PropTypes.string
};

export default Keyboard;
