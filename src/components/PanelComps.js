import React from 'react';

export const Led = (props) => {
    console.log('props', props);
  return (<div className={`PanelCompsLed is-on-${props.on}`} />);
};

export const Button = (props) => {
  return (<button className="PanelButton" >{props.children}</button>);
};

export const Slider = () => {
  return (<div className="PanelButton" />);
};
