import React, { Component, PropTypes } from 'react';

class PanelFx extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div className="PanelFx">
        <h3>Fx</h3>
        <label>Distort</label>
        <input
          type="checkbox"
          value={this.props.synth.dst_active}
          ref="dst_active"
          onChange={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'dst_active', 'boolean')}
          checked={this.props.synth.dst_active === true}
        />
        <input
          type="range"
          ref="dst_amount"
          value={this.props.synth.dst_amount*100}
          onChange={this.props.onPanelChanged.bind(this, 'FX_CHANGED', 'dst_amount', 'decimal')}
        />

      </div>
    );
  }
}

PanelFx.propTypes = {
  synth: PropTypes.object,
  onPanelChanged: PropTypes.func,
  className: PropTypes.string,
};

export default PanelFx;
