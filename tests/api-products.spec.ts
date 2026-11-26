import { test, expect} from '@playwright/test';

//Retrieve products
test('GET products', async ({request}) => {
 
    const response = await request.get('https://api.practicesoftwaretesting.com/products');

   //Verify the API status returned
    expect(response.status()).toBe(200);

   //Extract JSON response body
    const body = await response.json();

   //check one product field - name
   expect(body.data[0].name).toBeTruthy;


});