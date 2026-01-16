import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Header from '@/components/header';
import '@testing-library/jest-dom';

// Mock GSAP
jest.mock('gsap', () => ({
  timeline: () => ({
    to: jest.fn().mockReturnThis(),
    from: jest.fn().mockReturnThis(),
    fromTo: jest.fn().mockReturnThis(),
    set: jest.fn().mockReturnThis(),
    play: jest.fn().mockReturnThis(),
    reverse: jest.fn().mockReturnThis(),
    pause: jest.fn().mockReturnThis(),
  }),
  to: jest.fn(),
  set: jest.fn(),
  registerPlugin: jest.fn(),
}));

jest.mock('@gsap/react', () => ({
  useGSAP: (callback: any) => callback(),
}));

// Mock Next/Image and Link
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => <img {...props} />,
}));

jest.mock('next/link', () => ({
  __esModule: true,
  default: ({ children, href, onClick }: any) => <a href={href} onClick={onClick}>{children}</a>,
}));

describe('Header', () => {
  it('renders logo and menu button', () => {
    render(<Header />);
    // The button has aria-label="Toggle menu"
    expect(screen.getByRole('button', { name: /Toggle menu/i })).toBeInTheDocument();
    expect(screen.getByAltText(/Divine's logo/i)).toBeInTheDocument();
  });

  it('contains navigation links', () => {
    render(<Header />);
    // Links are always in DOM now, just hidden.
    expect(screen.getByText('Home')).toBeInTheDocument();
    expect(screen.getByText('About')).toBeInTheDocument();
    expect(screen.getByText('Work')).toBeInTheDocument();
    expect(screen.getByText('Contact')).toBeInTheDocument();
  });
});
