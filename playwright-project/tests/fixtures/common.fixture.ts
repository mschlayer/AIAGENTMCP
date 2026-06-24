import { test as base, expect } from '@playwright/test';
import { BasePage } from '../pages/BasePage';

type Fixtures = {
  basePage: BasePage;
};

/**
 * Custom fixture that extends base test with common page object
 */
export const test = base.extend<Fixtures>({
  basePage: async ({ page }, use) => {
    const basePage = new BasePage(page);
    await use(basePage);
  },
});

export { expect };
