import React from 'react';
import {render, cleanup} from '@testing-library/react'
import SubstractButton from './SubtractButton';

describe('test of SubstractButton component', () => {
  afterEach(() => {
    cleanup();
  });

  it('Get active classes when active props is true', () => {
    const {rerender, getByText} = render(<SubstractButton active={false} />);

    expect(getByText('Subtract').className).not.toMatch(/active/);

    rerender(<SubstractButton active={true} />)

    expect(getByText('Subtract').className).toMatch(/active/);
  })
})