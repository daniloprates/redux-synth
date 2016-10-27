import React, { PropTypes } from 'react';

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
      onMouseDown={props.onMouseDown.bind(this)}
    >
      {props.children}
    </button>
  );
};
Button.propTypes = {
  className: PropTypes.string,
  onMouseDown: PropTypes.func,
  active: PropTypes.bool,
  children: PropTypes.string
};

export const SynthSlider = (props, actionType, param, valueType) => {
  let defaultValue = props.synth[param];
  if (valueType == 'decimal') {
    valueType = valueType * 100;
  }
  return (
    <input
      type="range"
      ref="env_releasetime"
      defaultValue={defaultValue}
      onMouseDown={this.props.onPanelChanged.bind(this, actionType, param, valueType)}
    />
  );
};
SynthSlider.propTypes = {
  synth: PropTypes.object,
};

export const ButtonSet = (props) => {
  return (
    <div className={`button-set ${props.className}`}>
      {props.children}
    </div>
  );
};
ButtonSet.propTypes = {
  className: PropTypes.string,
  children: PropTypes.array,
};


/* Specific button for Oscillator type */
export const OscTypeButton = (props) => {
  return (
    <Button
      active={props.synth[props.param] == props.value}
      onMouseDown={props.onPanelChanged.bind(this, 'OSC_CHANGED', props.param, props.value)}
    >{props.children}</Button>
  );
};
OscTypeButton.propTypes = {
  param: PropTypes.string,
  children: PropTypes.string,
  i: PropTypes.number,
  value: PropTypes.string,
  onPanelChanged: PropTypes.func,
  synth: PropTypes.object
};

/* Specific set for Oscillator type */
export const OscTypeSet = (props) => {
  return (
    <ButtonSet>
      <OscTypeButton
        {...props}
        value="sine"
      >
      SIN
      </OscTypeButton>
      <OscTypeButton
        {...props}
        value="triangle"
      >
      TRI
      </OscTypeButton>

      <OscTypeButton
        {...props}
        value="sawtooth"
      >
      SAW
      </OscTypeButton>
      <OscTypeButton
        {...props}
        value="square"
      >
      SQR
      </OscTypeButton>
    </ButtonSet>
  );
};
OscTypeSet.propTypes = {
  param: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.array,
};



