import {test, expect, request} from '@playwright/test';

test ('C6 Missing quantity (API)', async({request}) => {

const productResponse = await request.get('https://api.practicesoftwaretesting.com/products');

expect (productResponse.status()).toBe(200);

const productBody = await productResponse.json();

expect(productBody.data.length).toBeGreaterThan(0);

const productId = productBody.data[0].id;

//create cart.
const cartResponse = await request.post('https://api.practicesoftwaretesting.com/carts');

expect (cartResponse.status()).toBe(201);

const cartBody = await cartResponse.json();

expect (cartBody.id).toBeTruthy();

const cartId = cartBody.id;

try {
    //add product to cart

 const addProductResponse = await request.post(
        `https://api.practicesoftwaretesting.com/carts/${cartId}`,
        {
            data: {
                product_id: productId
                
            }
        }
    );

expect (addProductResponse.status()).toBe(422);

//Verify the response after adding product to cart

const addProductBody = await addProductResponse.json();

expect (addProductBody.result).toBe('Resource not found');


} finally {
    // Clean up: Delete the cart
        const deleteCartResponse = await request.delete(
            `https://api.practicesoftwaretesting.com/carts/${cartId}`
        );

        expect(deleteCartResponse.status()).toBe(204);
    }

});

