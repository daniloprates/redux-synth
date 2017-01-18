import React from 'react';
import {shallow} from 'enzyme';
import {expect} from 'chai';
import PanelGlobal from './PanelGlobal';


describe('<PanelGlobal />', () => {

  const PanelGlobalWrapper = shallow(
    <PanelGlobal
      global={{
        bpm: 120,
      }}
      onPanelChanged={() => {}}
      stopPlaying={() => {}}
    />
  );

  it ('should make use of the Panel component', () => {

    const actual = PanelGlobalWrapper.find('Panel').length;
    const expected = 1;

    expect(actual).to.equal(expected);

  });
  // it('should have a header called \'About\'', () => {
  //   const wrapper = shallow(<AboutPage />);
  //   const actual = wrapper.find('h2').text();
  //   const expected = 'About';

  //   expect(actual).to.equal(expected);
  // });

  // it('should have a header with \'alt-header\' class', () => {
  //   const wrapper = shallow(<AboutPage />);
  //   const actual = wrapper.find('h2').prop('className');
  //   const expected = 'alt-header';

  //   expect(actual).to.equal(expected);
  // });

  // it('should link to an unknown route path', () => {
  //   const wrapper = shallow(<AboutPage />);
  //   const actual = wrapper.findWhere(n => n.prop('to') === '/badlink').length;
  //   const expected = 1;

  //   expect(actual).to.be.equal(expected);
  // });
});
