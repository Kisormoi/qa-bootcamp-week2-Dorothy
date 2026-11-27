
import { test, expect } from '@playwright/test';
import { pathToFileURL } from 'node:url';
import path from 'node:path';

test('flacky test ,Save message', async ({ page }) => {

    const fileUrl = pathToFileURL(
        path.join(__dirname, 'index.html')
    ).href;

    //opening the html file
    await page.goto(fileUrl);

    // click on Save button
    await page.locator('#save').click();

    
    await page.waitForTimeout(500);

    // read message
    const message = await page.locator('#status').textContent();

    // check message
    if (message !== 'Saved') {
        throw new Error(`Expected "Saved" but received "${message}"`);
    }
});
