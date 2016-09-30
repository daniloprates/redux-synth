import React, { Component, PropTypes } from 'react';
import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
import { noteOn, noteOff, noteChanged, octaveChanged} from '../actions/synthActions';
import Panel from '../components/Panel';
import SynthKeyboard from './SynthKeyboard';

class SynthPage extends Component {
  constructor(props) {
      super(props);
  }

  render() {
    return (
      <div>
        <SynthPanel
          onOctaveChanged={this.props.octaveChanged}

         />
        <SynthKeyboard
          {...this.props}
          onNoteOn={this.props.noteOn}
          onNoteOff={this.props.noteOff}
          onNoteChanged={this.props.noteChanged}
        />
      </div>
    );
  }
}

SynthPage.propTypes = {
  noteOn: PropTypes.func.isRequired,
  noteOff: PropTypes.func.isRequired,
  noteChanged: PropTypes.func.isRequired
};

const mapStateToProps = (state={}) => {
  return state;
};

export default connect(mapStateToProps, {
  noteOn,
  noteOff,
  noteChanged,
  octaveChanged
})(SynthPage);
