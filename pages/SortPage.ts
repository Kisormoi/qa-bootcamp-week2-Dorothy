import {Page, Locator} from '@playwright/test';

export class SortPage {

    readonly sortInput: Locator;
    readonly productNames: Locator;
    readonly productPrices: Locator;
   

       // Recieve browser page
       constructor(readonly page: Page) {

        //locators
        this.sortInput = page.locator('select[data-test="sort"]');
        this.productNames = page.locator('[data-test="product-name"]');
        this.productPrices = page.locator('[data-test="product-price"]');
    }

    //sort action

    async sortProducts(option: string) {
        await this.sortInput.selectOption(option);
    }
}

