import React, { Component, PropTypes } from 'react';
import { notesMidi } from '../constants/notes';
import { scales } from '../constants/scales';
import Key from './KeyboardKey';

class Keyboard extends Component {
  static getKeys(props) {
    props;
    notesMidi;
    scales;
    return [
      {
        className : 'white-key',

      },
      {
        className : 'black-key',

      },
      {
        className : 'white-key',

      },
      {
        className : 'black-key',

      },
      {
        className : 'white-key'

      },

    ];
  }

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
                this.props.keyboard.keys.map((keyInfo, i) => (
                  <Key
                    key={i}
                    keyInfo={keyInfo}
                    {...this.props}
                    i={i}
                    o={o}
                    />
                ))
              }
            </ul>
          ))
        }

          {/*
            [].eachR(this.props.keyboard.octaves, o => (
                <ul key={o}>
                  {
                    [].eachR(12, (i) => (
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
          */}
        {/*
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
        */}
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
