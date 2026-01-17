import { render, screen } from '@testing-library/react';
import Home from '@/app/page';

// Mock Next.js Image
jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: any) => {
    // eslint-disable-next-line @next/next/no-img-element
    return <img {...props} alt={props.alt} />;
  },
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

// Mock embla-carousel-react
jest.mock('embla-carousel-react', () => {
  return jest.fn(() => [jest.fn(), jest.fn()]);
});
jest.mock('embla-carousel-autoplay', () => {
  return jest.fn(() => jest.fn());
});


describe('Home Page', () => {
  it('renders hero section', () => {
    render(<Home />);
    // Check for "Hi! I'm Divine"
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toHaveTextContent("Hi! I'm Divine.");
  });

  it('renders sections', () => {
    render(<Home />);
    const headings = screen.getAllByRole('heading', { level: 2 });
    expect(headings.some(h => h.textContent?.includes('About Me'))).toBeTruthy();
    expect(headings.some(h => h.textContent?.includes('My Collabs'))).toBeTruthy();
    expect(headings.some(h => h.textContent?.includes('My Work'))).toBeTruthy();
  });
});
