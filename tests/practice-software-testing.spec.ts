import { test, expect } from '@playwright/test';

test('Verify homepage title', async ({page}) =>{

    // navigate to url
    await page.goto('https://practicesoftwaretesting.com/');

    //Verify result
    await expect(page).toHaveTitle('Practice Software Testing - Toolshop - v5.0');

});

test('Search returns products containing pliers only', async({page})=>{
    await page.goto('https://practicesoftwaretesting.com/');

  //Find searchbox
  const searchBox = page.getByRole('textbox', {name: 'Search'});

  await searchBox.fill('pliers');
  await searchBox.press('Enter');

  //locate product names containing pliers
  const productNames = page.getByText(/pliers/i);

  // wait for search results
   await expect(productNames.first()).toBeVisible();

    // Read all products
     const results = await productNames.allTextContents();

    console.log('Matching results:', results);
    expect(results.length).toBeGreaterThan(0);

    // Verify result contains pliers
    for (const result of results) {
        expect(result).toMatch(/pliers/i);
    }

});

test('Invalid login is rejected', async ({ page }) => {

    await page.goto('https://practicesoftwaretesting.com');

    // Open login page
    await page.getByRole('link', { name: /sign in/i }).click();

    // Enter invalid credentials
    await page.getByLabel(/email/i).fill('dtest@example.com');

    await page.getByPlaceholder('Your password', { exact: true }).fill('invalidPassword123');

    // Submit login
    await page.getByRole('button', { name: /login/i }).click();

    // Verify 
    await expect(
        page.getByText('Invalid email or password')
    ).toBeVisible();

});
