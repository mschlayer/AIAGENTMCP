import { test, expect } from '@playwright/test';

test('should login, add iPhone X to cart, and verify it on checkout page', async ({ page }) => {
  // Step 1: Navigate to login page
  await page.goto('https://rahulshettyacademy.com/loginpagePractise/');
  await page.waitForLoadState('networkidle');

  // Step 2: Fill login form and submit
  await page.locator('#username').fill('rahulshettyacademy');
  await page.locator('#password').fill('Learning@830$3mK2');
  await page.locator('input[type="checkbox"]').check();
  
  // Wait for navigation after login
  await page.locator('#signInBtn').click();
  await page.waitForURL('**/angularpractice/shop');
  await page.waitForLoadState('networkidle');

  // Step 3: Find iPhone X card and click Add button
  console.log('Looking for iPhone X product card...');
  const allCards = page.locator('.card');
  const cardCount = await allCards.count();
  console.log(`Found ${cardCount} product cards`);

  let iphoneXFound = false;
  for (let i = 0; i < cardCount; i++) {
    const card = allCards.nth(i);
    const title = await card.locator('h4').textContent();
    console.log(`Card ${i}: ${title}`);
    
    if (title?.toLowerCase().includes('iphone x')) {
      console.log('Found iPhone X! Clicking Add button...');
      iphoneXFound = true;
      await card.locator('button').click();
      await page.waitForTimeout(1000); // Wait for cart to update
      break;
    }
  }

  expect(iphoneXFound).toBe(true);

  // Step 4: Verify cart was updated (Checkout link should show item count)
  const checkoutText = await page.locator('a:has-text("Checkout")').textContent();
  console.log(`Checkout text: ${checkoutText}`);
  
  // Step 5: Navigate to checkout
  await page.locator('a:has-text("Checkout")').click();
  await page.waitForURL('**/angularpractice/checkout');
  await page.waitForLoadState('networkidle');

  // Step 6: Verify iPhone X is in the checkout cart
  const bodyText = await page.textContent('body');
  console.log('Checkout page text sample:', bodyText?.substring(0, 500));
  
  // Check if the product appears in the table rows
  const tableText = await page.locator('table').textContent();
  console.log('Table content:', tableText);
  
  expect(tableText?.toLowerCase()).toContain('iphone x');
});
