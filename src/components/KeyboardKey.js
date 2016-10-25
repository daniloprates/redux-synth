import React, { Component, PropTypes } from 'react';
// import { notesMidi } from '../constants/notes';
// import { scales } from '../constants/scales';

class KeyboardKey extends Component {
  constructor(props) {
    super(props);

    // let { index, octave, note } = this.getScaleInfo(props, scales[this.props.keyboard.scale]);

    // this.state = {
    //   scale: scales[this.props.keyboard.scale],
    //   index, octave, note
    // };

  }

  // componentWillReceiveProps(nextProps) {

  //   if (nextProps.keyboard.scale !== this.props.keyboard.scale || nextProps.keyboard.root !== this.props.keyboard.root) {
  //     let { index, octave, note } = this.getScaleInfo(nextProps, scales[nextProps.keyboard.scale]);
  //     this.setState({
  //       scale: scales[nextProps.keyboard.scale],
  //       index, octave, note
  //     });
  //   }
  // }

  // getScaleInfo(props, scale) {

  //   let index = props.i,
  //       octave = props.keyboard.octave + props.o,
  //       note;

  //   if (scale.indexOf(index) > -1) {
  //     note = (index + props.keyboard.root) + (12 * octave);
  //   } else {
  //     note = null;
  //   }

  //   this.note = note;

  //   return {index, octave, note};

  // }

  // getClassName() {
  //   let notes = (this.props.global.notes && this.props.global.notes[this.note]);
  //   let isPlaying = `is-playing-${!!notes}`;
  //   let keyColor = `${notesMidi[this.state.note].isSharp ? 'black' : 'white'}-key`;
  //   let isRoot = `is-root-${this.props.i === 0}`;
  //   return `${isPlaying} ${keyColor} ${isRoot}`;
  // }

  render() {

    if (this.props.keyInfo) {
        console.log('this.props.keyInfo', this.props.keyInfo);
      return (
        <li
          data-note={this.props.keyInfo.note}
          data-octave={this.props.keyInfo.octave}
          className={this.props.keyInfo.className}
          />
      );
    } else {
      return false;
    }

  }
}

KeyboardKey.propTypes = {
  global: PropTypes.object.isRequired,
  keyboard: PropTypes.object.isRequired,
  className: PropTypes.string,
  i: PropTypes.number,
  o: PropTypes.number,
  octave: PropTypes.number,
  scale: PropTypes.string,
  root: PropTypes.number,
  notes: PropTypes.object
};

export default KeyboardKey;
