import React, { Component, PropTypes } from 'react';


class Panel extends Component {
  constructor(props) {
      super(props);
      this.octavesLength = 10;
      this.amp = 0;
  }
  render() {
    return (
      <div className="Panel">
        <ul
          className={`octaveButtons active-octave-${this.props.octave + 1}`}>
          {[...Array(this.props.octavesLength)].map((x, i) =>
            <li
              key={i}
              onClick={this.props.onOctaveClick.bind(this,i)}
            />
          )}
        </ul>
        <p className={this.props.isPlaying} />
        <input
          type="range"
          ref={ref => this.ampSlider = ref}
          onInput={this.props.onAmplitudeChange.bind(this,this.ampSlider)}
          />

      </div>
    );
  }
}

Panel.propTypes = {
  onOctaveClick: PropTypes.func.isRequired,
  onAmplitudeChange: PropTypes.func.isRequired,
  octavesLength: PropTypes.number.isRequired,
  octave: PropTypes.number,
  isPlaying: PropTypes.bool
};

export default Panel;
