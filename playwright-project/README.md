# Playwright Testing Project

A Playwright testing project integrated with the MCP (Model Context Protocol) setup.

## Project Structure

```
playwright-project/
├── tests/
│   ├── pages/           # Page Object Models
│   ├── fixtures/        # Test fixtures
│   └── example.spec.ts  # Example test
├── playwright.config.ts # Playwright configuration
├── tsconfig.json        # TypeScript configuration
├── package.json         # Project dependencies
└── README.md           # This file
```

## Getting Started

### Installation

```bash
cd playwright-project
npm install
npm run install-browsers
```

### Running Tests

```bash
# Run all tests
npm test

# Run tests in UI mode
npm test:ui

# Run tests in headed mode (see browser)
npm test:headed

# Run tests in debug mode
npm test:debug

# Generate test code via codegen
npm run codegen

# View HTML report
npm run test:report
```

## Writing Tests

### Example Test File

```typescript
import { test, expect } from '@playwright/test';

test('example test', async ({ page }) => {
  await page.goto('https://example.com');
  const title = await page.title();
  expect(title).toBe('Example Domain');
});
```

### Using Page Object Models

Create page objects in `tests/pages/`:

```typescript
import { Page } from '@playwright/test';

export class LoginPage {
  constructor(private page: Page) {}

  async goto() {
    await this.page.goto('/login');
  }

  async login(username: string, password: string) {
    await this.page.fill('#username', username);
    await this.page.fill('#password', password);
    await this.page.click('#submit');
  }
}
```

## Configuration

Edit `playwright.config.ts` to:
- Change `baseURL`
- Add/remove browsers
- Configure reporters
- Set up web server

## Documentation

- [Playwright Official Docs](https://playwright.dev)
- [MCP Integration Guide](../MCP_SETUP_GUIDE.md)
