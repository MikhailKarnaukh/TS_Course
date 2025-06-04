import { test, expect } from '@playwright/test';

test('Task 1', async ({ page }) => {
  await page.goto('https://example.com/');
  const title = await page.title();
  expect(title).toBe('Example Domain')
  expect(page.url()).toContain('example.com');
  const bodyText = await page.textContent('body');
  expect(bodyText).toMatch('This domain is for use in illustrative examples');
  await expect(page.locator('h1')).toHaveText('Example Domain');
});

test('Task 2', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const currentUrl = page.url();
  expect(currentUrl.startsWith('https://playwright.dev')).toBe(true);
  const getLinksQuantity = page.locator('a', { hasText: 'Get started' });
  await expect(getLinksQuantity).toHaveCount(1);
});
