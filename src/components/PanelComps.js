import React, { PropTypes } from 'react';

export const Led = (props) => {
  return (<div className={`PanelCompsLed is-on-${props.on}`} />);
};
Led.propTypes = {
  on: PropTypes.bool
};

export const Button = (props) => {
  return (<button className="PanelButton" >{props.children}</button>);
};
Button.propTypes = {
  children: PropTypes.string
};

export const Slider = () => {
  return (<div className="PanelButton" />);
};
