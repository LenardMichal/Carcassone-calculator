import React from 'react';
import renderer from 'react-test-renderer';
import Meeple from './Meeple';

describe('test of Meeple component', () => {
  it('should match snapshot', () => {
    const tree = renderer.create(<Meeple />).toJSON();

    expect(tree).toMatchSnapshot();
  })
})