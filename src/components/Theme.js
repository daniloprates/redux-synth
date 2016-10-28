/* eslint-disable */

import React, { PropTypes } from 'react';
import * as themes from '../constants/themes';
import ThemeContent from './ThemeContent';

const styleContent = (props) => {
  return ({__html: `
    ${ThemeContent(props)}
  `});
}

const Theme = (props) => {
  let theme = themes[props.global.theme];
  return (
    <style
      dangerouslySetInnerHTML={styleContent(theme)}
    />
  );
};

Theme.propTypes = {
  global: PropTypes.object,
  theme: PropTypes.string
};

export default Theme;
