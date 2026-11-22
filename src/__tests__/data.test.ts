import content from '../data/content.json';
import { SITE_BLOG_URL, SITE_FALLBACK_URL, SITE_URL } from '@/lib/site';
import fs from 'fs';
import path from 'path';

describe('Content Data', () => {
  it('uses divineorji.com as the primary website and dpkreativ.vercel.app as fallback', () => {
    expect(SITE_URL).toBe('https://divineorji.com');
    expect(SITE_FALLBACK_URL).toBe('https://dpkreativ.vercel.app');
    expect(SITE_BLOG_URL).toBe('https://divineorji.com/blog');
    expect(content.contact.website).toBe('https://divineorji.com');
    expect(content.contact.fallbackWebsite).toBe('https://dpkreativ.vercel.app');
  });

  it('should have required properties', () => {
    expect(content).toHaveProperty('avatar');
    expect(content).toHaveProperty('portraits');
    expect(content).toHaveProperty('brands');
    expect(content).toHaveProperty('projects');
    expect(content).toHaveProperty('navlinks');
    expect(content).toHaveProperty('socials');
  });

  it('should have valid image paths', () => {
    const publicDir = path.join(process.cwd(), 'public');

    const checkImage = (imgUrl: string) => {
        // Remove leading slash to join correctly
        const relativePath = imgUrl.startsWith('/') ? imgUrl.substring(1) : imgUrl;
        const imgPath = path.join(publicDir, relativePath);
        // console.log(`Checking image: ${imgPath}`);
        expect(fs.existsSync(imgPath)).toBe(true);
    };

    checkImage(content.avatar);
    content.portraits.forEach(checkImage);
    checkImage(content.logo);

    // brands
    content.brands.forEach(brand => checkImage(brand.image));
    // projects
    content.projects.forEach(project => checkImage(project.image));
  });
});
