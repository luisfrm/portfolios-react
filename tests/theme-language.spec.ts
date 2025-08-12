import { test, expect } from '@playwright/test';

test.describe('Theme and Language Toggle Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Wait for page to load and animations to complete
    await page.waitForTimeout(500);
  });

  test('should toggle language from English to Spanish', async ({ page }) => {
    // Check initial language (should be English)
    await expect(page.getByRole('heading', { name: /Hello! I'm Luis Rivas/ })).toBeVisible();
    
    // Click language toggle button (more specific selector)
    await page.locator('button').filter({ hasText: 'ES' }).first().click();
    
    // Wait for language change animation
    await page.waitForTimeout(300);
    
    // Verify language changed to Spanish
    await expect(page.getByRole('heading', { name: /¡Hola! Soy Luis Rivas/ })).toBeVisible();
  });

  test('should toggle language back to English', async ({ page }) => {
    // First change to Spanish
    await page.locator('button').filter({ hasText: 'ES' }).first().click();
    await page.waitForTimeout(300);
    await expect(page.getByRole('heading', { name: /¡Hola! Soy Luis Rivas/ })).toBeVisible();
    
    // Toggle back to English
    await page.locator('button').filter({ hasText: 'EN' }).first().click();
    await page.waitForTimeout(300);
    
    // Verify language changed back to English
    await expect(page.getByRole('heading', { name: /Hello! I'm Luis Rivas/ })).toBeVisible();
  });

  test('should toggle theme functionality', async ({ page }) => {
    // Find theme toggle button
    const themeButton = page.locator('button[aria-label*="theme"], button[aria-label*="Theme"], .theme-toggle, .dark-mode-toggle').first();
    
    if (await themeButton.isVisible()) {
      // Get initial theme state
      const initialTheme = await page.evaluate(() => {
        return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
      });
      
      // Click theme toggle
      await themeButton.click();
      await page.waitForTimeout(300);
      
      // Check if theme changed
      const newTheme = await page.evaluate(() => {
        return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
      });
      
      expect(newTheme).not.toBe(initialTheme);
      
      // Toggle back
      await themeButton.click();
      await page.waitForTimeout(300);
      
      const finalTheme = await page.evaluate(() => {
        return document.documentElement.classList.contains('dark') ? 'dark' : 'light';
      });
      
      expect(finalTheme).toBe(initialTheme);
    }
  });

  test('should maintain navigation consistency in both languages', async ({ page }) => {
    // Test navigation in English
    await page.locator('nav').getByText('Experience', { exact: true }).first().click();
    await expect(page.getByRole('heading', { name: 'Work Experience' })).toBeVisible();
    
    // Switch to Spanish
    await page.locator('button').filter({ hasText: 'ES' }).first().click();
    await page.waitForTimeout(300);
    
    // Test navigation in Spanish
    await page.locator('nav').getByText('Experiencia', { exact: true }).first().click();
    await expect(page.getByRole('heading', { name: 'Experiencia Laboral' })).toBeVisible();
  });

  test('should maintain button functionality in both languages', async ({ page }) => {
    // Test CV button in English
    const cvButton = page.locator('#download-cv-button');
    await expect(cvButton).toBeVisible();
    await expect(cvButton).toBeEnabled();
    
    // Switch to Spanish
    await page.locator('button').filter({ hasText: 'ES' }).first().click();
    await page.waitForTimeout(300);
    
    // Test CV button in Spanish (should still work)
    await expect(cvButton).toBeVisible();
    await expect(cvButton).toBeEnabled();
  });

  test('should persist language preference', async ({ page }) => {
    // Change to Spanish
    await page.locator('button').filter({ hasText: 'ES' }).first().click();
    await page.waitForTimeout(300);
    await expect(page.getByRole('heading', { name: /¡Hola! Soy Luis Rivas/ })).toBeVisible();
    
    // Reload page
    await page.reload();
    await page.waitForTimeout(500);
    
    // Check if language preference is maintained
    await expect(page.getByRole('heading', { name: /¡Hola! Soy Luis Rivas/ })).toBeVisible();
  });
}); 