import { render } from '@testing-library/react';

import Rcl from './rcl';

describe('Rcl', () => {
  it('should render successfully', () => {
    const { baseElement } = render(<Rcl />);
    expect(baseElement).toBeTruthy();
  });
});
