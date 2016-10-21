import React, { Component, PropTypes } from 'react';
import { scales } from '../constants/scales';

class PanelKeyboard extends Component {
  constructor(props) {
    super(props);
  }

  rootSelect() {

    if (this.props.scale !== 'chromatic') {
      return (
          <div>
            <label htmlFor="panel-kb-root">Root</label>
              <select
                id="panel-kb-root"
                value={this.props.root}
                ref="root"
                onChange={this.props.onPanelChanged.bind(this, 'root', 'int')}
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
          id="panel-kb-scale"
          value={this.props.scale}
          ref="scale"
          onChange={this.props.onPanelChanged.bind(this, 'scale')}
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
              onClick={this.props.onPanelChanged.bind(this, 'octaves', i+1)}
              className={`active-${this.props.octaves == i+1}`}
            >
              {i+1}
            </button>
          ))
        }
        {this.rootSelect()}
      </div>
    );
  }
}

PanelKeyboard.propTypes = {
    scale: PropTypes.string,
    root: PropTypes.number,
    onPanelChanged: PropTypes.func,
    octaves: PropTypes.number,
};

export default PanelKeyboard;
