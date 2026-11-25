import { Page, Locator } from '@playwright/test';

// creating a reusable page object
export class SearchPage{

       readonly searchInput: Locator;
       readonly productNames: Locator;

       // Recieve browser page
       constructor(readonly page: Page) {
           

           //locators
           this.searchInput = page.getByPlaceholder('Search');
           this.productNames = page.locator('.card-title');

       }

       //Search action
       async searchForProduct(productName: string) {
           await this.searchInput.fill(productName);
           await this.searchInput.press('Enter');
       }
    async getProductNames(): Promise<string[]> {
        return await this.productNames.allTextContents();
    }

}