import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login', {waitUntil: 'networkidle'});
  await page.getByPlaceholder('Username').fill('Admin');
  await page.getByPlaceholder('Password').fill('admin123');
  await page.locator('//button').click();
  await expect(page, {waitUntil: 'networkidle'}).toHaveTitle(/OrangeHRM/);
});
