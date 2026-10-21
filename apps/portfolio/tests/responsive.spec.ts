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
    
    const mobileMenuButton = page.locator('#nav-mobile-menu-button');
    await expect(mobileMenuButton).toBeVisible();

    // Click mobile menu button to open navigation
    await mobileMenuButton.click();

    // Wait for mobile menu animation to complete (300ms)
    await page.waitForTimeout(300);

    // Navigation items live in the sheet dialog, not in the hidden desktop nav
    const mobileNav = page.getByRole('dialog');
    await expect(mobileNav.getByText('Experience', { exact: true })).toBeVisible();
    await expect(mobileNav.getByText('Projects', { exact: true })).toBeVisible();
    await expect(mobileNav.getByText('Contact', { exact: true })).toBeVisible();
    await expect(mobileNav.getByText('Skills', { exact: true })).toBeVisible();
    await expect(mobileNav.getByText('About', { exact: true })).toBeVisible();

    // Test mobile CV button
    await expect(mobileNav.getByText('Download CV', { exact: true })).toBeVisible();
  });

  test('should have proper touch targets on mobile', async ({ page }) => {
    await page.goto('/');
    
    // Set viewport to mobile size
    await page.setViewportSize({ width: 375, height: 667 });
    
    // Wait for page to load
    await page.waitForTimeout(500);
    
    // WCAG 2.2 AA (2.5.8): every control needs at least a 24x24 CSS px target.
    const controls = page.locator('button, a[role="button"]');
    const controlCount = await controls.count();

    for (let i = 0; i < controlCount; i++) {
      const control = controls.nth(i);
      if (await control.isVisible()) {
        const box = await control.boundingBox();
        if (box) {
          const label =
            (await control.getAttribute('aria-label')) ??
            (await control.innerText()).trim().slice(0, 40);
          expect(box.width, `width of control "${label}"`).toBeGreaterThanOrEqual(24);
          expect(box.height, `height of control "${label}"`).toBeGreaterThanOrEqual(24);
        }
      }
    }

    // Primary mobile actions keep the comfortable 44x44 tap target.
    const primaryActions = [
      { id: '#download-cv-button', name: 'Download CV' },
      { id: '#get-in-touch-button', name: 'Get in touch' },
    ];

    for (const action of primaryActions) {
      const box = await page.locator(action.id).boundingBox();
      expect(box?.width ?? 0, `width of "${action.name}"`).toBeGreaterThanOrEqual(44);
      expect(box?.height ?? 0, `height of "${action.name}"`).toBeGreaterThanOrEqual(44);
    }

    const menuButton = page.locator('#nav-mobile-menu-button');
    const menuBox = await menuButton.boundingBox();
    expect(menuBox?.width ?? 0, 'width of the mobile menu trigger').toBeGreaterThanOrEqual(44);
    expect(menuBox?.height ?? 0, 'height of the mobile menu trigger').toBeGreaterThanOrEqual(44);
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