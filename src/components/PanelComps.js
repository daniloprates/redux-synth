import React, { PropTypes } from 'react';

export const getParam = (paramName, props) => {
  return props.synth[`osc_${paramName}${props.i}`];
};

/* Led light on/off */
export const Led = (props) => {
  return (<div className={`PanelCompsLed is-on-${props.on}`} />);
};
Led.propTypes = {
  on: PropTypes.bool
};

/* Generic button */
export const Button = (props) => {
  return (
    <button
      className={`PanelButton active-${props.active} ${props.className}`}
      onMouseDown={props.onClick.bind(this)}
    >
      {props.children}
    </button>
  );
};
Button.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  active: PropTypes.bool,
  children: PropTypes.string
};

/* Specific button for Oscillator type */
export const OscTypeButton = (props) => {
  return (
    <Button
      {...props}
      className={`btn-osc-type`}
      active={getParam('type', props) == props.value}
      onClick={props.onPanelChanged.bind(this, 'OSC_CHANGED', `osc_type${props.i}`, props.value)}
    >{props.value}</Button>
  );
};
OscTypeButton.propTypes = {
  i: PropTypes.number,
  value: PropTypes.string,
  onPanelChanged: PropTypes.func
};


export const tst = () => console.log('foi');


export const Slider = () => {
  return (<div className="PanelButton" />);
};
