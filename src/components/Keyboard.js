import React from 'react';

const Keyboard = (props) => {
  return (
    <div className="Keyboard">
      <ul
        onMouseDown={props.onMouseDown.bind(this)}
        onMouseUp={props.onMouseUp.bind(this)}
        onMouseMove={props.onMouseMove.bind(this)}
        >
        <li data-note="0">&nbsp;</li>
        <li data-note="1" className="sharp">&nbsp;</li>
        <li data-note="2">&nbsp;</li>
        <li data-note="3" className="sharp">&nbsp;</li>
        <li data-note="4">&nbsp;</li>
        <li data-note="5">&nbsp;</li>
        <li data-note="6" className="sharp">&nbsp;</li>
        <li data-note="7">&nbsp;</li>
        <li data-note="8" className="sharp">&nbsp;</li>
        <li data-note="9">&nbsp;</li>
        <li data-note="10" className="sharp">&nbsp;</li>
        <li data-note="11">&nbsp;</li>
        <li data-note="12">&nbsp;</li>
      </ul>

    </div>
  );
};

Keyboard.propTypes = {
  onMouseDown: React.PropTypes.func.isRequired,
  onMouseUp: React.PropTypes.func.isRequired,
  onMouseMove: React.PropTypes.func.isRequired
};

export default Keyboard;
