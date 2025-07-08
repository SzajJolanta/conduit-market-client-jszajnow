import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: 'src/tests',
  outputDir: 'src/tests/playwright-results',
  reporter: [
    ['html', { outputFolder: 'src/tests/playwright-report' }],
    ['list'],
  ],
  webServer: {
    command: 'bun run dev',
    port: 5173, // <--- Make sure this matches Vite's default!
    reuseExistingServer: !process.env.CI,
    timeout: 30000,
  },
  use: {
    headless: false,
    baseURL: 'http://localhost:5173/', // <--- Match the port!
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
  },
});

console.log('▶ Starting Playwright tests in Vite mode: test')
