import { render, cleanup } from 'vitest-browser-react';
import { setupTests } from './tests';

setupTests({
  cleanup,
  render,
  click: async (el: Element) => {
    if (el instanceof HTMLElement) el.click();
  },
});
