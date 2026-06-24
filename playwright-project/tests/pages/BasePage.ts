import { Page } from '@playwright/test';

/**
 * Base Page Object Model
 * Provides common methods for all page objects
 */
export class BasePage {
  constructor(protected page: Page) {}

  /**
   * Navigate to a URL
   */
  async goto(url: string) {
    await this.page.goto(url);
  }

  /**
   * Get page title
   */
  async getTitle(): Promise<string> {
    return await this.page.title();
  }

  /**
   * Wait for element to be visible
   */
  async waitForElement(selector: string) {
    await this.page.waitForSelector(selector, { state: 'visible' });
  }

  /**
   * Click an element
   */
  async click(selector: string) {
    await this.page.click(selector);
  }

  /**
   * Fill text input
   */
  async fill(selector: string, text: string) {
    await this.page.fill(selector, text);
  }

  /**
   * Get text content
   */
  async getText(selector: string): Promise<string> {
    return await this.page.textContent(selector) || '';
  }

  /**
   * Check if element is visible
   */
  async isVisible(selector: string): Promise<boolean> {
    return await this.page.isVisible(selector);
  }
}
