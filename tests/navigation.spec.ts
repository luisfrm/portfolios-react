import { test, expect } from '@playwright/test';

test.describe('Navigation Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should navigate to Experience section', async ({ page }) => {
    // Use more specific selector for navigation
    await page.locator('nav').getByText('Experience', { exact: true }).first().click();
    
    // Verify we're in the Experience section
    await expect(page.getByRole('heading', { name: 'Work Experience' })).toBeVisible();
  });

  test('should navigate to Projects section', async ({ page }) => {
    // Use more specific selector for navigation
    await page.locator('nav').getByText('Projects', { exact: true }).first().click();
    
    // Verify we're in the Projects section
    await expect(page.getByRole('heading', { name: 'Projects' })).toBeVisible();
  });

  test('should navigate to Contact section', async ({ page }) => {
    // Use more specific selector for navigation
    await page.locator('nav').getByText('Contact', { exact: true }).first().click();
    
    // Verify we're in the Contact section
    await expect(page.getByRole('heading', { name: 'Contact' })).toBeVisible();
  });

  test('should navigate to Skills section', async ({ page }) => {
    // Use more specific selector for navigation
    await page.locator('nav').getByText('Skills', { exact: true }).first().click();
    
    // Verify we're in the Skills section
    await expect(page.getByRole('heading', { name: 'Skills' })).toBeVisible();
  });

  test('should navigate to About section', async ({ page }) => {
    // Use more specific selector for navigation
    await page.locator('nav').getByText('About', { exact: true }).first().click();
    
    // Verify we're in the About section (hero section)
    await expect(page.getByRole('heading', { name: /Hello! I'm Luis Rivas/ })).toBeVisible();
  });

  test('should have working social media links', async ({ page }) => {
    // Test GitHub link
    const githubLink = page.getByRole('link', { name: /GitHub/i }).first();
    await expect(githubLink).toBeVisible();
    await expect(githubLink).toHaveAttribute('href', /github\.com/);
    
    // Test LinkedIn link
    const linkedinLink = page.getByRole('link', { name: /LinkedIn/i }).first();
    await expect(linkedinLink).toBeVisible();
    await expect(linkedinLink).toHaveAttribute('href', /linkedin\.com/);
  });

  test('should have working CV download button', async ({ page }) => {
    // Test the main hero CV button
    const cvButton = page.locator('#download-cv-button');
    await expect(cvButton).toBeVisible();
    await expect(cvButton).toBeEnabled();
  });

  test('should have working Get in Touch button', async ({ page }) => {
    // Test the main hero Get in Touch button
    const getInTouchButton = page.locator('#get-in-touch-button');
    await expect(getInTouchButton).toBeVisible();
    await expect(getInTouchButton).toBeEnabled();
    
    // Click the button to test functionality
    await getInTouchButton.click();
    
    // Verify it scrolls to contact section
    await expect(page.getByRole('heading', { name: 'Contact' })).toBeVisible();
  });

  test('should have working navigation CV buttons', async ({ page }) => {
    // Test desktop navigation CV button
    const navCvButton = page.locator('#nav-cv-button');
    await expect(navCvButton).toBeVisible();
    await expect(navCvButton).toBeEnabled();
    
    // Test mobile navigation CV button (if visible)
    const mobileCvButton = page.locator('#nav-mobile-cv-button');
    if (await mobileCvButton.isVisible()) {
      await expect(mobileCvButton).toBeVisible();
      await expect(mobileCvButton).toBeEnabled();
    }
  });
}); 