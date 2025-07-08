import type { Page, Locator } from '@playwright/test';

// Wait for visible and click
export async function waitForVisibleAndClick(
  page: Page,
  selector: string | Locator,
  timeout: number = 5000
) {
  const locator = typeof selector === 'string' ? page.locator(selector) : selector;
  await locator.waitFor({ state: 'visible', timeout });
  await locator.click();
}

export async function waitForVisibleAndClickFirst(
  page: Page,
  selector: string | Locator,
  timeout: number = 5000
) {
  const locator = typeof selector === 'string' ? page.locator(selector) : selector;
  await locator.first().scrollIntoViewIfNeeded();
  await locator.first().waitFor({ state: 'visible', timeout });
  await locator.first().click();
}

// Wait for visible and fill
export async function waitForVisibleAndFill(
  page: Page,
  selector: string | Locator,
  value: string,
  timeout: number = 5000
) {
  const locator = typeof selector === 'string' ? page.locator(selector) : selector;
  await locator.scrollIntoViewIfNeeded();
  await locator.waitFor({ state: 'visible', timeout });
  await locator.fill(value);
}

// Wait for visible and get text
export async function waitForVisibleAndGetText(
  page: Page,
  selector: string | Locator,
  timeout: number = 5000
): Promise<string> {
  const locator = typeof selector === 'string' ? page.locator(selector) : selector;
  await locator.waitFor({ state: 'visible', timeout });
  return locator.textContent() ?? '';
}
