import { expect, test, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import Home from './page';
import RootLayout from '../layout';

vi.mock('next/font/google', () => ({
  Inter: () => ({
    style: {
      fontFamily: 'mocked',
    },
  }),
}));

vi.mock('next/navigation', () => ({
  useRouter: vi.fn(),
}));

test('Home Page', () => {
  render(
    <RootLayout>
      <Home />
    </RootLayout>
  );
  expect(
    screen.getByRole('heading', { level: 1, name: 'Home Page' })
  ).toBeDefined();
});
