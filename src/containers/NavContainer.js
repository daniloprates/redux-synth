import React, { Component, PropTypes } from 'react';

class Nav extends Component {


    constructor(props) {
        super(props);
    }

    render() {
        return (
          <div className="Nav">
            <h1>RDX</h1>
            <ul>
              <li >Blah!</li>
            </ul>
          </div>
        );
    }
}


Nav.propTypes = {
    className: PropTypes.string,
};

export default Nav;
