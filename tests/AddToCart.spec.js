import { test, expect } from '@playwright/test';


test.describe('swag labs processes', () => {
    test.beforeEach(async({page}) => {
        await page.goto('/');
        await page.locator('[data-test="username"]').click();
        await page.locator('[data-test="username"]').fill('standard_user');
        await page.locator('[data-test="password"]').click();
        await page.locator('[data-test="password"]').fill('secret_sauce');
        await page.locator('[data-test="login-button"]').click();
        await expect(page.locator('[data-test="inventory-container"]')).toBeVisible();
    });
    test('add to cart', async ({ page }) => {
        await page.locator('[data-test="inventory-list"] div').filter({ hasText: 'Sauce Labs Backpackcarry.allTheThings() with the sleek, streamlined Sly Pack tha' }).nth(1).click();
        await page.locator('[data-test="add-to-cart-sauce-labs-backpack"]').click();
        await page.locator('[data-test="shopping-cart-link"]').click();
        await page.locator('[data-test="inventory-item"]').click();
        await page.locator('[data-test="item-quantity"]').click();
        await page.locator('[data-test="checkout"]').click();
        await page.locator('[data-test="firstName"]').click();
        await page.locator('[data-test="firstName"]').fill('test');
        await page.locator('[data-test="lastName"]').click();
        await page.locator('[data-test="lastName"]').fill('user');
        await page.locator('[data-test="postalCode"]').click();
        await page.locator('[data-test="postalCode"]').fill('12345');
        await page.locator('[data-test="continue"]').click();
        await expect(page.locator('[data-test="secondary-header"]')).toBeVisible();
        await page.locator('[data-test="finish"]').click();
        await expect(page.locator('[data-test="checkout-complete-container"]')).toBeVisible();
        await page.locator('[data-test="back-to-products"]').click();
    });
});
