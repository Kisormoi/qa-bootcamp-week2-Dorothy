import { test, expect } from '@playwright/test';

test('Invalid login is rejected', async ({ page }) => {

    await page.goto('https://practicesoftwaretesting.com');

    // Open login page
    await page.getByRole('link', { name: /sign in/i }).click();

    // Enter invalid credentials
    await page.getByLabel(/email/i).fill('dtest@test.com');

    await page.getByPlaceholder('Your password', { exact: true }).fill('invalidPassword123');

    // Submit login
    await page.getByRole('button', { name: /login/i }).click();

    // Verify expected result
    await expect(
        page.getByText('Invalid email or password')
    ).toBeVisible();

});