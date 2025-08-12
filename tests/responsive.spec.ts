import { test, expect } from '@playwright/test';

test.describe('Responsive Design Tests', () => {
  test('should display correctly on desktop', async ({ page }) => {
    await page.goto('/');
    
    // Set viewport to desktop size
    await page.setViewportSize({ width: 1920, height: 1080 });
    
    // Verify desktop layout elements are visible
    await expect(page.getByRole('heading', { name: /Hello! I'm Luis Rivas/ })).toBeVisible();
    await expect(page.locator('nav').getByText('Experience', { exact: true })).toBeVisible();
    await expect(page.locator('nav').getByText('Projects', { exact: true })).toBeVisible();
    await expect(page.locator('nav').getByText('Contact', { exact: true })).toBeVisible();
    await expect(page.locator('nav').getByText('Skills', { exact: true })).toBeVisible();
    await expect(page.locator('nav').getByText('About', { exact: true })).toBeVisible();
  });

  test('should display correctly on tablet', async ({ page }) => {
    await page.goto('/');
    
    // Set viewport to tablet size
    await page.setViewportSize({ width: 768, height: 1024 });
    
    // Verify tablet layout elements are visible
    await expect(page.getByRole('heading', { name: /Hello! I'm Luis Rivas/ })).toBeVisible();
    await expect(page.locator('nav').getByText('Experience', { exact: true })).toBeVisible();
    await expect(page.locator('nav').getByText('Projects', { exact: true })).toBeVisible();
    await expect(page.locator('nav').getByText('Contact', { exact: true })).toBeVisible();
    await expect(page.locator('nav').getByText('Skills', { exact: true })).toBeVisible();
    await expect(page.locator('nav').getByText('About', { exact: true })).toBeVisible();
  });

  test('should handle mobile navigation', async ({ page }) => {
    await page.goto('/');
    
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Wait for page to load and animations to complete
    await page.waitForTimeout(500);
    
    // Check if mobile menu button is visible
    const mobileMenuButton = page.locator('button[aria-label="Toggle menu"], button[aria-label="Open menu"], .mobile-menu-button, .hamburger-button').first();
    
    if (await mobileMenuButton.isVisible()) {
      // Click mobile menu button to open navigation
      await mobileMenuButton.click();
      
      // Wait for mobile menu animation to complete (300ms)
      await page.waitForTimeout(300);
      
      // Now check if navigation items are visible in mobile menu
      await expect(page.getByText('Experience', { exact: true })).toBeVisible();
      await expect(page.getByText('Projects', { exact: true })).toBeVisible();
      await expect(page.getByText('Contact', { exact: true })).toBeVisible();
      await expect(page.getByText('Skills', { exact: true })).toBeVisible();
      await expect(page.getByText('About', { exact: true })).toBeVisible();
      
      // Test mobile CV button if it exists
      const mobileCvButton = page.locator('#nav-mobile-cv-button');
      if (await mobileCvButton.isVisible()) {
        await expect(mobileCvButton).toBeVisible();
        await expect(mobileCvButton).toBeEnabled();
      }
    } else {
      // If mobile menu button is not visible, navigation might be always visible
      await expect(page.getByText('Experience', { exact: true })).toBeVisible();
      await expect(page.getByText('Projects', { exact: true })).toBeVisible();
      await expect(page.getByText('Contact', { exact: true })).toBeVisible();
      await expect(page.getByText('Skills', { exact: true })).toBeVisible();
      await expect(page.getByText('About', { exact: true })).toBeVisible();
    }
  });

  test('should have proper touch targets on mobile', async ({ page }) => {
    await page.goto('/');
    
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Wait for page to load
    await page.waitForTimeout(500);
    
    // Check if buttons have minimum touch target size (44px)
    const buttons = page.locator('button, a[role="button"]');
    const buttonCount = await buttons.count();
    
    for (let i = 0; i < buttonCount; i++) {
      const button = buttons.nth(i);
      if (await button.isVisible()) {
        const box = await button.boundingBox();
        if (box) {
          // Check if button has minimum touch target size
          expect(box.width).toBeGreaterThanOrEqual(44);
          expect(box.height).toBeGreaterThanOrEqual(44);
        }
      }
    }
  });

  test('should maintain functionality across screen sizes', async ({ page }) => {
    const viewports = [
      { width: 1920, height: 1080, name: 'Desktop' },
      { width: 768, height: 1024, name: 'Tablet' },
      { width: 375, height: 667, name: 'Mobile' }
    ];
    
    for (const viewport of viewports) {
      await page.goto('/');
      await page.setViewportSize(viewport);
      await page.waitForTimeout(500);
      
      // Test basic functionality on each screen size
      await expect(page.getByRole('heading', { name: /Hello! I'm Luis Rivas/ })).toBeVisible();
      
      // Test CV download button
      const cvButton = page.locator('#download-cv-button');
      await expect(cvButton).toBeVisible();
      await expect(cvButton).toBeEnabled();
      
      // Test Get in Touch button
      const getInTouchButton = page.locator('#get-in-touch-button');
      await expect(getInTouchButton).toBeVisible();
      await expect(getInTouchButton).toBeEnabled();
    }
  });
}); 