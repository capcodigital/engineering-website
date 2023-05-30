import * as React from 'react';
import { render, screen } from '@testing-library/react';
import FooterComponent from '../index';

describe('Footer Component tests', () => {
  it('Should render Footer Component', () => {
    render(<FooterComponent />);
    expect(screen.getByTestId('footer')).toBeInTheDocument();
  });
});
