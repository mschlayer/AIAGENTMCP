import { test, expect } from '@playwright/test';

test.describe('Example Tests', () => {
  test.beforeEach(async ({ page }) => {
    // This runs before each test
    await page.goto('https://example.com');
  });

  test('should have correct title', async ({ page }) => {
    const title = await page.title();
    expect(title).toBe('Example Domain');
  });

  test('should have visible h1 heading', async ({ page }) => {
    const heading = page.locator('h1');
    await expect(heading).toBeVisible();
    const text = await heading.textContent();
    expect(text).toContain('Example Domain');
  });

  test('should have paragraph with more information', async ({ page }) => {
    const paragraph = page.locator('p');
    await expect(paragraph).toBeVisible();
  });

  test('should navigate using links', async ({ page }) => {
    // Example of navigation test
    const initialURL = page.url();
    expect(initialURL).toContain('example.com');
  });
});
