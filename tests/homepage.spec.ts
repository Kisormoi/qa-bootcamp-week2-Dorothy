import { test, expect } from '@playwright/test';

test('Verify homepage title', async ({page}) =>{

    // navigate to url
    await page.goto('https://practicesoftwaretesting.com/');

    //Verify page loads succesfully
    await expect(page).toHaveTitle('Practice Software Testing - Toolshop - v5.0');

});