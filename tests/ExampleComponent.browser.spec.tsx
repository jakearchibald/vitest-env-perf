import { render, cleanup } from 'vitest-browser-react';
import { userEvent } from '@vitest/browser/context';
import { setupTests } from './tests';

setupTests({
  cleanup,
  render,
  click: userEvent.click,
});
