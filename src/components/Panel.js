import React, { Component, PropTypes } from 'react';

class Panel extends Component {
    constructor(props) {
      super(props);
      this.classNames = [
        `panel-${this.props.name.toLowerCase()}`,
        `panel-type-${this.props.type || 'default'}`,
        `panel-size-${this.props.size || 'normal'}`
      ].join(' ');

      this.titleText = (!this.props.noTitle) ? this.props.name : '';
    }

    render() {
      const Title = `h${this.props.tagLevel || '3'}`;
      return (
        <div
          className={this.classNames}
        >
          <Title>{this.titleText}</Title>
          {this.props.children}
        </div>
      );
    }
}

Panel.propTypes = {
  name: PropTypes.string.isRequired,
  children: PropTypes.node,
  type: PropTypes.string,
  tagLevel: PropTypes.string,
  classNames: PropTypes.string,
  size: PropTypes.string,
  noTitle: PropTypes.bool
};

export default Panel;
