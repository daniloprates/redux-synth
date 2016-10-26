import React, { Component, PropTypes } from 'react';
import { scales } from '../constants/scales';

class PanelKeyboard extends Component {
  constructor(props) {
    super(props);
  }

  rootSelect() {

    if (this.props.keyboard.scale !== 'chromatic') {
      return (
          <div>
            <label htmlFor="panel-kb-root">Root</label>
              <select
                id="panel-kb-root"
                value={this.props.keyboard.root}
                ref="root"
                onChange={this.props.onPanelChanged.bind(this, 'KEYBOARD_CHANGED','root', 'int')}
              >
                <option value="0">C</option>
                <option value="1">C#</option>
                <option value="2">D</option>
                <option value="3">D#</option>
                <option value="4">E</option>
                <option value="5">F</option>
                <option value="6">F#</option>
                <option value="7">G</option>
                <option value="8">G#</option>
                <option value="9">A</option>
                <option value="10">A#</option>
                <option value="11">B</option>
              </select>
          </div>
        );
    }
  }

  render() {

    return (
      <div className="PanelKeyboard">
        <h3>Keyboard</h3>
        <label htmlFor="panel-kb-scale">Scale</label>
        <select
          value={this.props.keyboard.scale}
          ref="scale"
          onChange={this.props.onPanelChanged.bind(this, 'KEYBOARD_CHANGED','scale')}
        >
          {
              Object.keys(scales).map((scale,i) => (
                  <option
                      key={i}
                      value={scale}
                  >
                  {scale}
                  </option>
              ))
          }
        </select>
        <label>Octaves</label>
        {
          [...Array(5)].map((x, i) => (
            <button
              key={i}
              onClick={this.props.onPanelChanged.bind(this, 'KEYBOARD_CHANGED','octaves', i+1)}
              className={`btn-octaves active-${this.props.keyboard.octaves == i+1}`}
            >
              {i+1}
            </button>
          ))
        }
        {this.rootSelect()}
        <label>Octave</label>
        <button
          onClick={this.props.onPanelChanged.bind(this, 'OCTAVE_PREV', null, null)}
          className="btn-keyboard-oct-prev"
        >&#8637;</button>
        <button
          onClick={this.props.onPanelChanged.bind(this, 'OCTAVE_NEXT', null, null)}
          className="btn-keyboard-oct-prev"
        >&#8640;</button>

      </div>
    );
  }
}

PanelKeyboard.propTypes = {
  keyboard: PropTypes.object,
  scale: PropTypes.string,
  root: PropTypes.number,
  onPanelChanged: PropTypes.func,
  octaves: PropTypes.number,
};

export default PanelKeyboard;
