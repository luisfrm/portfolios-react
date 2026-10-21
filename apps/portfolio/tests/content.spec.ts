import { test, expect } from '@playwright/test';
import { clickNavItem, isMobileNavView, openMobileNav } from './helpers';

test.describe('Content Verification Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display main hero content', async ({ page }) => {
    // Verify hero section content
    await expect(page.getByRole('heading', { name: /Hello! I'm Luis Rivas/ })).toBeVisible();
    await expect(page.getByRole('heading', { name: /Full Stack/ })).toBeVisible();
    await expect(page.getByText(/Computer Engineer/).first()).toBeVisible();
  });

  test('should display work experience section', async ({ page }) => {
    // Navigate to experience section
    await clickNavItem(page, 'Experience');
    
    // Verify work experience content
    await expect(page.getByRole('heading', { name: 'Work Experience' })).toBeVisible();
    
    // Check for work experience content
    const experienceContent = page.locator('time, .experience-item, .work-item, [data-testid="experience"]');
    const experienceCount = await experienceContent.count();
    expect(experienceCount).toBeGreaterThan(0);
  });

  test('should display projects section', async ({ page }) => {
    // Navigate to projects section
    await clickNavItem(page, 'Projects');
    
    // Verify projects content
    await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible();
    
    // Check for project content
    const projectContent = page.locator('.project-item, .card, [data-testid="project"], h3');
    const projectCount = await projectContent.count();
    expect(projectCount).toBeGreaterThan(0);
  });

  test('should display skills section', async ({ page }) => {
    // Navigate to skills section
    await clickNavItem(page, 'Skills');
    
    // Verify skills content
    await expect(page.getByRole('heading', { name: 'Skills' })).toBeVisible();
    
    // Check for skills content
    const skillsContent = page.locator('.skills, [data-testid="skills"], .tech-stack, .skill-category');
    if (await skillsContent.count() > 0) {
      await expect(skillsContent.first()).toBeVisible();
    }
  });

  test('should display about section', async ({ page }) => {
    // Navigate to about section
    await clickNavItem(page, 'About');
    
    // Verify about content (hero section)
    await expect(page.getByRole('heading', { name: /Hello! I'm Luis Rivas/ })).toBeVisible();
  });

  test('should have working project links', async ({ page }) => {
    // Navigate to projects section
    await clickNavItem(page, 'Projects');
    
    // Check for external links inside the projects section only: the header
    // also links to GitHub/LinkedIn, and on mobile those live in a closed sheet.
    const projectLinks = page.locator('#projects a[href^="http"]:visible');
    expect(await projectLinks.count()).toBeGreaterThan(0);

    const firstLink = projectLinks.first();
    await expect(firstLink).toBeVisible();
    await expect(firstLink).toHaveAttribute('href', /^https?:\/\//);
  });

  test('should have working social media links', async ({ page }) => {
    // Check GitHub link
    const githubLinks = page.getByRole('link', { name: /GitHub/i });
    const githubCount = await githubLinks.count();
    
    if (githubCount > 0) {
      const githubLink = githubLinks.first();
      await expect(githubLink).toBeVisible();
      await expect(githubLink).toHaveAttribute('href', /github\.com/);
    }
    
    // Check LinkedIn link
    const linkedinLinks = page.getByRole('link', { name: /LinkedIn/i });
    const linkedinCount = await linkedinLinks.count();
    
    if (linkedinCount > 0) {
      const linkedinLink = linkedinLinks.first();
      await expect(linkedinLink).toBeVisible();
      await expect(linkedinLink).toHaveAttribute('href', /linkedin\.com/);
    }
  });

  test('should have proper meta information', async ({ page }) => {
    // Check page title
    await expect(page).toHaveTitle(/Luis Rivas|Portfolio|Developer/);
    
    // Check meta description
    const metaDescription = page.locator('meta[name="description"]');
    if (await metaDescription.count() > 0) {
      await expect(metaDescription.first()).toHaveAttribute('content');
    }
  });

  test('should have proper accessibility attributes', async ({ page }) => {
    // Check for proper heading structure
    const headings = page.locator('h1, h2, h3, h4, h5, h6');
    const headingCount = await headings.count();
    expect(headingCount).toBeGreaterThan(0);
    
    // Check for alt text on images
    const images = page.locator('img');
    const imageCount = await images.count();
    
    for (let i = 0; i < imageCount; i++) {
      const image = images.nth(i);
      const alt = await image.getAttribute('alt');
      // Alt text should exist (even if empty for decorative images)
      expect(alt).not.toBeNull();
    }
  });

  test('should have proper contact information', async ({ page }) => {
    // Navigate to contact section
    await clickNavItem(page, 'Contact');
    
    // Verify contact section
    await expect(page.getByRole('heading', { name: 'Contact' })).toBeVisible();
    
    // Check for contact form fields (using actual field names)
    await expect(page.getByRole('textbox', { name: 'Name' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Email' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Subject' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Message' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Send Message' })).toBeVisible();
  });

  test('should have working CV download buttons', async ({ page }) => {
    // Test hero CV button
    const heroCvButton = page.locator('#download-cv-button');
    await expect(heroCvButton).toBeVisible();
    await expect(heroCvButton).toBeEnabled();

    if (await isMobileNavView(page)) {
      // The header CV action is inside the mobile sheet
      await openMobileNav(page);
      await expect(
        page.getByRole('dialog').getByText('Download CV', { exact: true })
      ).toBeVisible();
      return;
    }

    // Test navigation CV button
    const navCvButton = page.locator('#nav-cv-button');
    await expect(navCvButton).toBeVisible();
    await expect(navCvButton).toBeEnabled();
  });

  test('should have working Get in Touch button', async ({ page }) => {
    // Test hero Get in Touch button
    const getInTouchButton = page.locator('#get-in-touch-button');
    await expect(getInTouchButton).toBeVisible();
    await expect(getInTouchButton).toBeEnabled();
  });
}); 