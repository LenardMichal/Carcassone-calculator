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

    expect( queryAllByText('0')[0].className ).not.toMatch(/active/);

    fireEvent.click(queryAllByText('0')[0]);

    expect( queryAllByText('0')[0].className ).toMatch(/active/);

    fireEvent.click(queryAllByText('0')[0]);

    expect( queryAllByText('0')[0].className ).not.toMatch(/active/);



  })

  it('active player should get one point when he\'s active and 1 point button will be clicked', () => {
    const {queryAllByText, queryByText, getByTestId} = render(<MeepleContainer />);

    const player0Field = getByTestId('player0');
    const addOnePointBtn = getByTestId('addPointsBtn1');

    //Check that clicking points button don't give not active player points
    fireEvent.click(addOnePointBtn)
    expect(player0Field.textContent).toEqual('0');

    //click player0 field to make him active
    fireEvent.click(player0Field);
    
    //click at one point button should add one points
    fireEvent.click(addOnePointBtn);

    expect(player0Field.textContent).toEqual("1");

    //another click give it another point
    fireEvent.click(addOnePointBtn);
    expect(player0Field.textContent).toEqual('2');


  })
})