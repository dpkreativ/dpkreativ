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
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(
      screen.getByText((_, element) => element?.textContent?.replace(/\s+/g, ' ').trim() === 'Average Delivery Time'),
    ).toBeInTheDocument();
    expect(
      screen.getByText((_, element) => element?.textContent?.replace(/\s+/g, ' ').trim() === 'Projects Completed'),
    ).toBeInTheDocument();
  });

  it('renders sections', () => {
    render(<Home />);
    const headings = screen.getAllByRole('heading', { level: 2 });
    expect(headings.some(h => h.textContent?.includes('WHO'))).toBeTruthy();
    expect(headings.some(h => h.textContent?.includes('FEATURED'))).toBeTruthy();
    expect(headings.some(h => h.textContent?.includes('LATEST'))).toBeTruthy();
  });
});
