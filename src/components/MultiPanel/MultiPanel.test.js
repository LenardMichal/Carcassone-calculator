import React from 'react';
import MultiPanel from './MultiPanel';

import { render, fireEvent } from '@testing-library/react';

describe("MultiPanel component test", () => {
  it('Should return value o multiplication on click', () => {

    const mockedFn = jest.fn();

    const {getByLabelText} = render(<MultiPanel onClickHandler={mockedFn} />);

    fireEvent.click(getByLabelText('x1'));

    expect(mockedFn.mock.calls.length).toBe(1);
    expect(mockedFn.mock.calls[0][0]).toBe(1);
    
  });
})