import * as React from 'react';
import { render, screen } from '@testing-library/react';
import HeroComponent from '../index';

describe('Hero Component tests', () => {
  it('Should render Hero Component', () => {
    render(<HeroComponent />);
    expect(screen.getByTestId('hero-container')).toBeInTheDocument();
  });
});
