import React from 'react';
import MeepleContainer from './MeepleContainer';
import {render, fireEvent, cleanup} from '@testing-library/react';

describe('test of Meeple Container', () => {

  afterEach(() => {
    cleanup();
  })

  it('Component should have 8 score fields', () => {
    const {queryAllByText} = render(<MeepleContainer />);

    expect(queryAllByText('0').length).toEqual(8);

  })

  it('first child shoud get "active" class toggled on click', () => {
    const {queryAllByText} = render(<MeepleContainer />);

    expect( queryAllByText('0')[0].className).not.toMatch(/active/);

    fireEvent.click(queryAllByText('0')[0]);

    expect( queryAllByText('0')[0].className).toMatch(/active/);

    fireEvent.click(queryAllByText('0')[0]);

    expect( queryAllByText('0')[0].className).not.toMatch(/active/);



  })
})