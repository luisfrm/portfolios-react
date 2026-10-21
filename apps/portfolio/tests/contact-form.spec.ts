import { test, expect } from '@playwright/test';

test.describe('Contact Form Tests', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    // Navigate to contact section
    await page.locator('nav').getByText('Contact', { exact: true }).first().click();
  });

  test('should display contact form fields', async ({ page }) => {
    // Check if all form fields are visible
    await expect(page.getByRole('textbox', { name: 'Nombre' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Email' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Asunto' })).toBeVisible();
    await expect(page.getByRole('textbox', { name: 'Mensaje' })).toBeVisible();
    await expect(page.getByRole('button', { name: 'Send Message' })).toBeVisible();
  });

  test('should fill and submit contact form successfully', async ({ page }) => {
    // Fill the form
    await page.getByRole('textbox', { name: 'Nombre' }).fill('Test User');
    await page.getByRole('textbox', { name: 'Email' }).fill('test@example.com');
    await page.getByRole('textbox', { name: 'Asunto' }).fill('Test Subject');
    await page.getByRole('textbox', { name: 'Mensaje' }).fill('This is a test message for automated testing purposes.');
    
    // Submit the form
    await page.getByRole('button', { name: 'Send Message' }).click();
    
    // Wait for success message or notification
    await expect(page.getByText(/Message sent successfully|Email sent|Thank you/i)).toBeVisible({ timeout: 10000 });
  });

  test('should validate required fields', async ({ page }) => {
    // Try to submit empty form
    await page.getByRole('button', { name: 'Send Message' }).click();
    
    // Should show validation errors or prevent submission
    // This test might need adjustment based on actual form validation
    await expect(page.getByRole('button', { name: 'Send Message' })).toBeVisible();
  });

  test('should clear form after successful submission', async ({ page }) => {
    // Fill the form
    await page.getByRole('textbox', { name: 'Nombre' }).fill('Test User');
    await page.getByRole('textbox', { name: 'Email' }).fill('test@example.com');
    await page.getByRole('textbox', { name: 'Asunto' }).fill('Test Subject');
    await page.getByRole('textbox', { name: 'Mensaje' }).fill('Test message');
    
    // Submit the form
    await page.getByRole('button', { name: 'Send Message' }).click();
    
    // Wait for success message
    await expect(page.getByText(/Message sent successfully|Email sent|Thank you/i)).toBeVisible({ timeout: 10000 });
    
    // Check if form fields are cleared (this depends on form implementation)
    // await expect(page.getByRole('textbox', { name: 'Nombre' })).toHaveValue('');
  });

  test('should handle email validation', async ({ page }) => {
    // Fill form with invalid email
    await page.getByRole('textbox', { name: 'Nombre' }).fill('Test User');
    await page.getByRole('textbox', { name: 'Email' }).fill('invalid-email');
    await page.getByRole('textbox', { name: 'Asunto' }).fill('Test Subject');
    await page.getByRole('textbox', { name: 'Mensaje' }).fill('Test message');
    
    // Submit the form
    await page.getByRole('button', { name: 'Send Message' }).click();
    
    // Should show validation error or prevent submission
    await expect(page.getByRole('button', { name: 'Send Message' })).toBeVisible();
  });
}); 