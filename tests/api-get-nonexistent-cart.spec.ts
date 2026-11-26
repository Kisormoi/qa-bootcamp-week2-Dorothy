import { test, expect } from '@playwright/test';

test('GET - Returns 404 for cart id that does not exist', async({request}) => {

    const cartResponse = await request.get('https://api.practicesoftwaretesting.com/carts/1234567');

    expect(cartResponse.status()).toBe(404);







});