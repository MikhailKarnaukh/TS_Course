import { defineConfig } from '@playwright/test';

export default defineConfig({
  testDir: './src',
  use: {
    headless: false,
  },
});