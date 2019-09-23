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
    const { getByTestId } = render(<MeepleContainer />);

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

  it('Clicking on substract button makes add points button to subtract', () => {
    const {queryByText, getByTestId} = render(<MeepleContainer />);

    //First check that on click on button adds class to show its toggled in
    fireEvent.click(queryByText('Subtract'));
    expect(queryByText('Subtract').className).toMatch(/active/);

    //activate any of players scorefield
    fireEvent.click(getByTestId('player1'));

    fireEvent.click(getByTestId('addPointsBtn1'));
    
    expect(getByTestId('player1').textContent).toEqual('-1');

  });

  it('clicking double click on clear button should reset scores and actives', () => {
    const {getByText, getByTestId} = render(<MeepleContainer />);

    fireEvent.click(getByTestId('player0'));
    fireEvent.click(getByTestId('addPointsBtn1'));
    
    expect(getByTestId('player0').textContent).toEqual('1');
    
    fireEvent.dblClick(getByText('Clear'));

    expect(getByTestId('player0').textContent).toEqual('0');
    expect(getByTestId('player0').className).not.toMatch(/active/);
    
  });

  // describe('Test of multiplication button', () => {
    
  //   // Expose object for testing
  //   let mockContainer = {};
  //   beforeAll( () => {
  //     mockContainer = render(<MeepleContainer />);
  //   });

  //   afterAll( () => {

  //   });
    
  //     // it('On start "x1" button should be only active', () => {
  //     //   const {getByText, getByLabelText} = mockContainer;

  //     //   // expect(getByLabelText('x1'))
  //     // });
  // })
})