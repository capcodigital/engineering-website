import * as React from 'react';
import { render, screen } from '@testing-library/react';
import ContentComponent from '../index';

describe('Content Component tests', () => {
  it('Should render Content Component with subtitle & content', () => {
    render(<ContentComponent subtitle="subtitle" content="content" />);

    expect(screen.getByText('subtitle')).toBeInTheDocument();
    expect(screen.getByText('content')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /learn more/i })).toBeInTheDocument();
  });
  it('Should render Content Compnent with no button', () => {
    render(<ContentComponent noBtn />);

    expect(screen.queryByRole('button', { name: /learn more/i })).not.toBeInTheDocument();
  });
});
