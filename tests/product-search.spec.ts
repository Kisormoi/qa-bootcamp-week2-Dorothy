import { test, expect } from '@playwright/test';

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
