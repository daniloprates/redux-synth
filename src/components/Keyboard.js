import React, { Component, PropTypes } from 'react';
import Key from './KeyboardKey';

class Keyboard extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (

      <div
        className={`Keyboard octaves-${this.props.keyboard.octaves} ${this.props.keyboard.scale == 'chromatic' ? 'chromatic' : ''}`}
        onMouseDown={this.props.onMouseDown.bind(this)}
        onMouseUp={this.props.onMouseUp.bind(this)}
        onMouseMove={this.props.onMouseMove.bind(this)}
        >
        {
          [...Array(this.props.keyboard.octaves)].map((y, o) => (
            <ul key={o}>
              {
                [...Array(12)].map((y, i) => (
                  <Key
                    key={i}
                    {...this.props}
                    i={i}
                    o={o}
                    />
                ))
              }
            </ul>
          ))
        }
      </div>

    );
  }
}

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
