
import { test, expect } from '@playwright/test';

test('Create cart, add a product and check response fields', async ({ request }) => {

    //Retrieve product and get id 
    const productsResponse = await request.get(
        'https://api.practicesoftwaretesting.com/products'
    );

    expect(productsResponse.status()).toBe(200);

    const productsBody = await productsResponse.json();

    expect(productsBody.data.length).toBeGreaterThan(0);

    const productId = productsBody.data[0].id;

    // Create cart
    const cartResponse = await request.post(
        'https://api.practicesoftwaretesting.com/carts'
    );

    expect(cartResponse.status()).toBe(201);

    const cartBody = await cartResponse.json();

    expect(cartBody.id).toBeTruthy();

    const cartId = cartBody.id;
try {
    // Add a product to cart
    const addProductResponse = await request.post(
        `https://api.practicesoftwaretesting.com/carts/${cartId}`,
        {
            data: {
                product_id: productId,
                quantity: 2
            }
        }
    );

    expect(addProductResponse.status()).toBe(200);

    // Verify response after adding product to cart
    const addProductBody = await addProductResponse.json();

    expect(addProductBody.result).toBe('item added or updated');

    // retrieve the cart
    const getCartResponse = await request.get(
        `https://api.practicesoftwaretesting.com/carts/${cartId}`
    );

    expect(getCartResponse.status()).toBe(200);

    const getCartBody = await getCartResponse.json();

    //check the response fields match what we added in the cart
    expect(getCartBody.id).toBe(cartId);

    expect(getCartBody.cart_items).toContainEqual(
        expect.objectContaining({
            product_id: productId,
            quantity: 2
        })
    );
} finally {
    // Clean up: Delete the cart
        const deleteCartResponse = await request.delete(
            `https://api.practicesoftwaretesting.com/carts/${cartId}`
        );

        expect(deleteCartResponse.status()).toBe(204);
    }

});
