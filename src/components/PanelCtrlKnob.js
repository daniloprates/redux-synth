import React, {PropTypes, Component} from 'react';
import { map } from '../utils/index';

class Knob extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: this.props.value,
      degree: 0,
      dragY: 0,
      initY: 0
    };
  }

  onMouseDown( e ) {
    e.persist();
    e.preventDefault ? e.preventDefault() : e.returnValue = false;

    let offsetTop = e.target.parentNode.offsetTop;
    let initY = e.clientY - offsetTop;

      this.setState({
        initY
      });

  }

  onMouseMove( e ) {
    e.persist();
    e.preventDefault ? e.preventDefault() : e.returnValue = false;

    if (e.buttons !== 0) {
      let offsetTop = e.target.parentNode.offsetTop;
      let dragY = e.clientY - offsetTop;

      if (dragY - this.state.initY < 10 && dragY - this.state.initY > -10) {
          // console.log('raw - this.state.raw', raw - this.state.raw);
        // return;
      }

      // if (dragY < this.state.initY) {
      //   // console.log('+');
      //   dragY = this.state.initY + 1;
      //   // degree++;
      // } else {
      //   // console.log('-');
      //   dragY = this.state.initY - 1;
      //   // degree--;
      //   // raw = this.state.raw - 1;
      // }
      // let degree = this.state.degree;

      // let degree = parseInt(map((dragY+this.state.initY), 50, 0, 0, 360));
      // let degree = (dragY+this.state.initY);
      let degree = parseInt(map((dragY+this.state.initY), 50, 0, 0, 50));

      if (dragY > this.state.initY) {
        degree = this.state.degree + degree;
      } else {
        degree = this.state.degree - degree;
      }


      if (degree > 360) {
        degree = 360;
      } else if (degree < 0) {
        degree = 0;
      }

      this.setState({
        dragY,
        degree
      });


      // if (raw - this.state.raw < 10 && raw - this.state.raw > -10) {
      //     // console.log('raw - this.state.raw', raw - this.state.raw);
      //   return;
      // }

      //     // console.log('this.state.raw', this.state.raw);
      //     // console.log('raw', raw);
      // if (raw > this.state.raw) {
      //   // console.log('+');
      //   raw = this.state.raw + 1;
      // } else {
      //   // console.log('-');
      //   raw = this.state.raw - 1;
      // }

      //   // console.log('raw 2', raw);
      // let degree = parseInt(map(raw, 40, 10, 0, 360));
      // if (degree > 360) {
      //   degree = 360;
      // } else if (degree < 0) {
      //   degree = 0;
      // }
      // // console.log('degree', degree);

      // this.setState({
      //   degree,
      //   raw
      // });

    }

  }

  onWheel() {

  }

  render() {
    return (
      <div className="Knob"
          onMouseDown={this.onMouseDown.bind(this)}
          onMouseMove={this.onMouseMove.bind(this)}
          style={{ backgroundColor1: `#${this.state.bg}` }}
        >
        <div
          className="Knob-spinner"
          style={{
            transform: `rotate(${this.state.degree}deg)`
          }}
        />
        <div className="Knob-label">
          <input
            type="number"
            min={0}
            max={100}
            ref="number"
            className="Knob-value"
            value={this.state.value}
            onWheel={() => this.onWheel.bind(this)}
          />
        </div>
      </div>
    );
  }

}

Knob.propTypes = {
  value: PropTypes.number
};

export default Knob;

