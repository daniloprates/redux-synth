import React, { Component, PropTypes } from 'react';
import { scales } from '../constants/scales';
import {ButtonSet} from './PanelComps';
import Panel from './Panel';

class PanelKeyboard extends Component {
  constructor(props) {
    super(props);
  }

  rootSelect() {

    if (this.props.keyboard.scale !== 'chromatic') {
      return (
        <select
          className="panel-key-root"
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
        );
    }
  }

  render() {

    return (
      <Panel
        name="Keyboard"
        type="keyboard"
        noTitle={true}
      >
        <label>Scale</label>
        <select
          className="panel-key-scale"
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
        <ButtonSet className="keyboard-octaves">
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
        </ButtonSet>
        {this.rootSelect()}
        <ButtonSet className="keyboard-octave">
          <button
            onClick={this.props.onPanelChanged.bind(this, 'OCTAVE_PREV', null, null)}
            className="btn-keyboard-oct-prev"
          >&#8637;</button>
          <button
            onClick={this.props.onPanelChanged.bind(this, 'OCTAVE_NEXT', null, null)}
            className="btn-keyboard-oct-prev"
          >&#8640;</button>
        </ButtonSet>

      </Panel>
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
