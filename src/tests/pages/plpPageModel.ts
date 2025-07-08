import type { Page } from '@playwright/test';
import {
  waitForVisibleAndClick,
  waitForVisibleAndClickFirst,
  waitForVisibleAndFill,
  waitForVisibleAndGetText
} from '../utils/actions';

export class PLP {
  constructor(public page: Page) {}

  // Search for a product
  async search(productName: string) {
    await waitForVisibleAndFill(this.page, '[data-test-id="search-input"]', productName);
    await waitForVisibleAndClick(this.page, '[data-test-id="search-btn"]');
  }

  // Add a specific product to cart (by name)
  async addProductToCart() {
    await waitForVisibleAndClickFirst(this.page, '[data-test-id="add-to-cart-btn"]');
  }

  // Get the number of products shown
  async getProductCount(): Promise<number> {
    const products = this.page.locator('[data-test-id="product-card"]');
    await products.first().waitFor({ state: 'visible', timeout: 5000 });
    return await products.count();
  }

  // Get the title of a product (by index)
  async getProductTitle(index: number = 0): Promise<string> {
    const product = this.page.locator('[data-test-id="product-card"]').nth(index);
    return await waitForVisibleAndGetText(this.page, product.locator('[data-test-id="product-title"]'));
  }
}
