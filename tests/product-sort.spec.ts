import { test, expect } from '@playwright/test';
import { SortPage } from '../pages/SortPage';

test('C3 Sort by price (UI)', async ({ page }) => {

    const sortPage = new SortPage(page);

    await page.goto('https://practicesoftwaretesting.com/');

    // load products
    await expect(sortPage.productPrices.first()).toBeVisible();

    // check products if they are available
    await expect.poll(
        async () => (await sortPage.productPrices.allTextContents()).length
    ).toBeGreaterThan(0);

    // select cheapest product by sorting lowest to highest
    await sortPage.sortInput.selectOption('price,asc');

    // wait for all displayed prices to be sorted from lowest to highest
    await expect.poll(async () => {
        const prices = await sortPage.productPrices.allTextContents();

        const numericPrices = prices.map(price =>
            Number(price.replace('$', '').trim())
        );

        return numericPrices.length > 0 &&
            numericPrices.every((price, i) =>
                i === 0 || numericPrices[i - 1] <= price
            );
    }).toBe(true);

    // retrieve product names and prices
    const names = await sortPage.productNames.allTextContents();
    const prices = await sortPage.productPrices.allTextContents();

    // display products and prices
    for (let i = 0; i < prices.length; i++) {
        console.log(`${names[i]} - ${prices[i]}`);
    }

    // confirm products are displayed
    expect(prices.length).toBeGreaterThan(0);

    // confirm prices are sorted from lowest to highest
    for (let i = 0; i < prices.length - 1; i++) {

        const currentPrice = Number(prices[i].replace('$', '').trim());
        const nextPrice = Number(prices[i + 1].replace('$', '').trim());

        expect(Number.isFinite(currentPrice)).toBeTruthy();
        expect(Number.isFinite(nextPrice)).toBeTruthy();

        expect(currentPrice).toBeLessThanOrEqual(nextPrice);
    }
});
