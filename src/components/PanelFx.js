import React, { Component, PropTypes } from 'react';
import {ButtonSet} from './PanelComps';
import Panel from './Panel';

class PanelFx extends Component {
  constructor(props) {
      super(props);
      this.active = props.synth.dst_active;
      this.amount = props.synth.dst_amount * 100;
  }

  componentWillReceiveProps(nextProps) {
    this.active = nextProps.synth.dst_active;
    this.amount = nextProps.synth.dst_amount * 100;
  }

  render() {
    return (
      <Panel
        name="Fx"
        size="0_75"
      >
        <label>Distort</label>
        <ButtonSet>
          <button
            onClick={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'dst_active', 'off')}
            className={`active-${this.active == 'off'}`}
          >
          off</button>
          <button
            onClick={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'dst_active', 'pre')}
            className={`active-${this.active == 'pre'}`}
          >
          pre</button>
          <button
            onClick={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'dst_active', 'post')}
            className={`active-${this.active == 'post'}`}
          >
          post</button>
        </ButtonSet>
        <br />

        <input
          style={{display: (this.active !== 'off') ? 'block' : 'none' }}
          type="range"
          ref="dst_amount"
          value={this.amount}
          onChange={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'dst_amount', 'decimal')}
        />

      </Panel>
    );
  }
}

PanelFx.propTypes = {
  synth: PropTypes.object,
  onPanelChanged: PropTypes.func,
  className: PropTypes.string,
};

export default PanelFx;
