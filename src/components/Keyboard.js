import React, { Component, PropTypes } from 'react';
import { scales } from '../constants/scales';
import Key from './KeyboardKey';

class Keyboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
          style: {
            lis: this.getLiStyle(props)
          }
        };
        // this.getLiStyle(props);

        window.scales = scales;
    }

    componentWillReceiveProps(nextProps) {
      this.getLiStyle({
        style: {
          lis: this.getLiStyle(nextProps)
        }
      });
    }

    getLiStyle(props) {
      let scale = scales[props.scale];
      let lis = [];
      let display;
      [...Array(12)].map((x,i) => {

        display = (!scale || scale.indexOf(i-1) > -1)
          ? 'block'
          : 'none';

        lis.push({display: display});
      });

      return (lis);
    }


    render() {
        return (

          <div
            className={`Keyboard octaves-${this.props.octaves} ${this.props.scale == 'chromatic' ? 'chromatic' : ''}`}
            onMouseDown={this.props.onMouseDown.bind(this)}
            onMouseUp={this.props.onMouseUp.bind(this)}
            onMouseMove={this.props.onMouseMove.bind(this)}
            >
            {
              [...Array(this.props.octaves)].map((y, o) => (
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
  octave: PropTypes.number
};

export default Keyboard;
