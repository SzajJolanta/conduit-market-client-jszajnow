import { test, expect } from '@playwright/test';
import { PLP } from './pages/plpPageModel';

test('search and add to cart from PLP', async ({ page }) => {
  const plp = new PLP(page);

  await page.goto('/');
  await plp.addProductToCart();
});
