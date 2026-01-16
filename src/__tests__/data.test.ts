import content from '../data/content.json';
import fs from 'fs';
import path from 'path';

describe('Content Data', () => {
  it('should have required properties', () => {
    expect(content).toHaveProperty('avatar');
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
    checkImage(content.logo);
    checkImage(content.logoword);

    // brands
    content.brands.forEach(brand => checkImage(brand.image));
    // projects
    content.projects.forEach(project => checkImage(project.image));
  });
});
