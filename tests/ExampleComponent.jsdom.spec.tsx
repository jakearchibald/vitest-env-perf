import { cleanup, render } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { setupTests } from './tests';

setupTests({
  cleanup,
  render,
  click: userEvent.click,
});
