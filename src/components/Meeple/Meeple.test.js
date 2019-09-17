import React from 'react';
// import renderer from 'react-test-renderer';
import {render, fireEvent, cleanup } from '@testing-library/react';
import Meeple from './Meeple';

describe('test of Meeple component', () => {
  afterEach(() => {
    cleanup()
  })
  // Test for change prevention
  // it('should match snapshot', () => {
  //   const tree = renderer.create(<Meeple />).toJSON();

  //   expect(tree).toMatchSnapshot();
  // })

  
  
  it('should get "active" class when active prop is true', () => {

    const {container, rerender} = render(<Meeple active={false} />);
    
    expect(container.firstChild.className).not.toMatch('active');
    
    rerender(<Meeple active={true} />);

    expect(container.firstChild.className).toMatch('active');
  })  


  it('should callback on click', () => {
    let mockFn = jest.fn();
    const {getByText} = render(<Meeple onClickHandler={mockFn} score={10} />)

    fireEvent.click(getByText('10'))
    
    expect(mockFn.mock.calls.length).toBe(1);
  });
})
