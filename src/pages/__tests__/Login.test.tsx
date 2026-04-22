import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Login from '../Login';

describe('Login page', () => {
  it('renders access form and submit button', () => {
    render(
      <MemoryRouter>
        <Login />
      </MemoryRouter>
    );

    expect(screen.getByRole('heading', { name: 'Acceso al Sistema' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Ingresar al Sistema' })).toBeInTheDocument();
  });
});
