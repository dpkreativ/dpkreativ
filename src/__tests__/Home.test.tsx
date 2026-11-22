import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

// Mock Next.js Image
jest.mock('next/image', () => ({
  __esModule: true,
  default: ({ fill, priority, ...props }: any) => <img {...props} alt={props.alt ?? ''} />,
}));

// Mock GSAP
jest.mock('gsap', () => ({
  registerPlugin: jest.fn(),
  timeline: jest.fn(() => ({
    from: jest.fn().mockReturnThis(),
  })),
  utils: {
    toArray: jest.fn(() => []),
  },
  to: jest.fn(),
  from: jest.fn(),
}));

jest.mock('@gsap/react', () => ({
  useGSAP: jest.fn(),
}));

jest.mock('gsap/ScrollTrigger', () => ({
  ScrollTrigger: {},
}));


describe('Home Page', () => {
  it('renders hero section', () => {
    render(<Home />);
    const heading = screen.getByRole('heading', { level: 1, name: 'Web apps for businesses' });
    expect(heading).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'See featured projects' })).toHaveAttribute('href', '#featured-projects');
  });

  it('renders sections', () => {
    render(<Home />);
    expect(screen.getByRole('heading', { level: 2, name: 'Featured projects' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { level: 2, name: 'Latest articles' })).toBeInTheDocument();
  });
});
