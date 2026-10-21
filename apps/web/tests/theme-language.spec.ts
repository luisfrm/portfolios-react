import { test, expect } from '@playwright/test';
import { clickNavItem, openMobileNav, toggleLanguage } from './helpers';

test.describe('Theme and Language Toggle Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Wait for page to load and animations to complete
    await page.waitForTimeout(500);
  });

  test('should toggle language from English to Spanish', async ({ page }) => {
    // Check initial language (should be English)
    await expect(page.getByRole('heading', { name: /Hello! I'm Luis Rivas/ })).toBeVisible();
    
    // Click the visible language toggle (header on desktop, sheet on mobile)
    await toggleLanguage(page);
    
    // Wait for language change animation
    await page.waitForTimeout(300);
    
    // Verify language changed to Spanish
    await expect(page.getByRole('heading', { name: /¡Hola! Soy Luis Rivas/ })).toBeVisible();
  });

  test('should toggle language back to English', async ({ page }) => {
    // First change to Spanish
    await toggleLanguage(page);
    await page.waitForTimeout(300);
    await expect(page.getByRole('heading', { name: /¡Hola! Soy Luis Rivas/ })).toBeVisible();
    
    // Toggle back to English
    await toggleLanguage(page);
    await page.waitForTimeout(300);
    
    // Verify language changed back to English
    await expect(page.getByRole('heading', { name: /Hello! I'm Luis Rivas/ })).toBeVisible();
  });

  test('should toggle theme functionality', async ({ page }) => {
    // On mobile the theme control lives inside the navigation sheet
    await openMobileNav(page);

    // The trigger is a dropdown: pick the explicit option instead of assuming
    // the button itself cycles themes.
    const themeButton = page.locator('button[aria-label="Toggle theme"]:visible').first();
    await expect(themeButton).toBeVisible();

    // next-themes writes the resolved theme to `data-theme` on <html>
    await themeButton.click();
    await page.getByRole('menuitem', { name: 'Dark', exact: true }).click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'dark');

    await themeButton.click();
    await page.getByRole('menuitem', { name: 'Light', exact: true }).click();
    await expect(page.locator('html')).toHaveAttribute('data-theme', 'light');
  });

  test('should maintain navigation consistency in both languages', async ({ page }) => {
    // Test navigation in English
    await clickNavItem(page, 'Experience');
    await expect(page.getByRole('heading', { name: 'Work Experience' })).toBeVisible();
    
    // Switch to Spanish
    await toggleLanguage(page);
    await page.waitForTimeout(300);
    
    // Test navigation in Spanish
    await clickNavItem(page, 'Experiencia');
    await expect(page.getByRole('heading', { name: 'Experiencia Laboral' })).toBeVisible();
  });

  test('should maintain button functionality in both languages', async ({ page }) => {
    // Test CV button in English
    const cvButton = page.locator('#download-cv-button');
    await expect(cvButton).toBeVisible();
    await expect(cvButton).toBeEnabled();
    
    // Switch to Spanish
    await toggleLanguage(page);
    await page.waitForTimeout(300);
    
    // Test CV button in Spanish (should still work)
    await expect(cvButton).toBeVisible();
    await expect(cvButton).toBeEnabled();
  });

  test('should persist language preference', async ({ page }) => {
    // Change to Spanish
    await toggleLanguage(page);
    await page.waitForTimeout(300);
    await expect(page.getByRole('heading', { name: /¡Hola! Soy Luis Rivas/ })).toBeVisible();
    
    // Reload page
    await page.reload();
    await page.waitForTimeout(500);
    
    // Check if language preference is maintained
    await expect(page.getByRole('heading', { name: /¡Hola! Soy Luis Rivas/ })).toBeVisible();
  });
}); 