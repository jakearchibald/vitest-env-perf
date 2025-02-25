import { cleanup, render } from '@testing-library/react';
import { setupTests } from './tests';

setupTests({
  cleanup,
  render,
  click: async (el: Element) => {
    if (el instanceof HTMLElement) el.click();
  },
});
