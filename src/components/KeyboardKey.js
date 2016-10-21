import React, { Component, PropTypes } from 'react';
import { notesMidi } from '../constants/notes';
import { scales } from '../constants/scales';

class KeyboardKey extends Component {
  constructor(props) {
    super(props);
    console.log('props', props);

    let { index, octave, note } = this.getScaleInfo(props, scales[this.props.scale]);

    this.state = {
      scale: scales[this.props.scale],
      index, octave, note
    };

  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.scale !== this.props.scale || nextProps.root !== this.props.root) {
      let { index, octave, note } = this.getScaleInfo(nextProps, scales[nextProps.scale]);
      this.setState({
        scale: scales[nextProps.scale],
        index, octave, note
      });
    }
  }

  getScaleInfo(props, scale) {

    let index = props.i,
        octave = props.octave + props.o,
        note;

    if (scale.indexOf(index) > -1) {
      note = (index + props.root) + (12 * octave);
    } else {
      note = null;
    }

    this.note = note;

    return {index, octave, note};

  }

  getClassName() {
    let isPlaying = `is-playing-${!!this.props.notes[this.note]}`;
    let keyColor = `${notesMidi[this.state.note].isSharp ? 'black' : 'white'}-key`;
    let isRoot = `is-root-${this.props.i === 0}`;
    return `${isPlaying} ${keyColor} ${isRoot}`;
  }

  render() {

    if (this.state.note) {
      return (
        <li
          data-note={this.state.note}
          data-octave={this.state.octave}
          className={this.getClassName()}
          />
      );
    } else {
      return false;
    }

  }
}

KeyboardKey.propTypes = {
  className: PropTypes.string,
  i: PropTypes.number,
  o: PropTypes.number,
  octave: PropTypes.number,
  scale: PropTypes.string,
  root: PropTypes.number,
  notes: PropTypes.object
};

export default KeyboardKey;
