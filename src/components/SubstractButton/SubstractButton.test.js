import React from 'react';
import {render, cleanup} from '@testing-library/react'
import SubstractButton from './SubstractButton';

describe('test of SubstractButton component', () => {
  afterEach(() => {
    cleanup();
  });

  it('Get active classes when active props is true', () => {
    const {rerender, getByText} = render(<SubstractButton active="false" />);

    expect(getByText)
  })
})