import React, { PropTypes } from 'react';
import Key from './KeyboardKey';

const Keyboard = (props) => {
    console.log('Keyboard', props);
  let { keys, octaves, scale } = props.keyboard;
  return (

      <div
        className={`Keyboard octaves-${octaves} ${scale == 'chromatic' ? 'chromatic' : ''}`}
        onMouseDown={props.onMouseDown.bind(this)}
        onMouseUp={props.onMouseUp.bind(this)}
        onMouseMove={props.onMouseMove.bind(this)}
        >
          <ul>
            {Object.keys(keys).map(function(key, i) {
                return (
                  <Key
                    key={i}
                    keyInfo={keys[key]}
                    i={i}
                    />
                );
            })}
          </ul>
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
