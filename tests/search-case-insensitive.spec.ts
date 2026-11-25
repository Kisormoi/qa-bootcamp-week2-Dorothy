import { test, expect} from '@playwright/test';
import { SearchPage } from  '../pages/SearchPage';

test('Verify product search is case-insensitive', async({ page }) => {

    const searchPage = new SearchPage(page);

    await page.goto('https://practicesoftwaretesting.com/');

    const searchTerms = ['pliers','PLIERS', 'Pliers'];

    for (const term of searchTerms) {

        //perform search
        await searchPage.searchForProduct(term);

        //verify products are displayed
        await expect(async () => {
         const productNames = await searchPage.getProductNames();

         expect(productNames.length).toBeGreaterThan(0);

         for (const productname of productNames) {
           expect(productname.toLowerCase()).toContain(term.toLowerCase());
         }
        }).toPass();

    }

});