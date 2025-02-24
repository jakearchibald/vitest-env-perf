import { expect, test, afterEach } from 'vitest';
import ExampleComponent from '../src/ExampleComponent';
import { mulberry32 } from './mullberry32';

const radios = 300;
const rand = mulberry32(123);
const tests = 50;

export function setupTests({
  cleanup,
  render,
  click,
}: {
  cleanup: () => void;
  render: (jsx: JSX.Element) => { container: Element };
  click: (el: Element) => Promise<void>;
}) {
  afterEach(cleanup);

  for (let i = 0; i < tests; i++) {
    test(`renders correct number of radios - ${i}`, async () => {
      const { container } = render(
        <ExampleComponent
          defaultSelected={Math.floor(rand() * radios)}
          radios={radios}
        />,
      );
      await expect(
        container.querySelectorAll('input[type="radio"]'),
      ).toHaveLength(300);
    });

    test(`has one selected radio - ${i}`, async () => {
      const { container } = render(
        <ExampleComponent
          defaultSelected={Math.floor(rand() * radios)}
          radios={radios}
        />,
      );
      await expect(
        container.querySelectorAll('input[type=radio]:checked'),
      ).toHaveLength(1);
    });

    test(`checking one radio unchecks another - ${i}`, async () => {
      const defaultSelected = Math.floor(rand() * radios);

      const { container } = render(
        <ExampleComponent defaultSelected={defaultSelected} radios={radios} />,
      );

      const nextSelected = (defaultSelected + 1) % radios;

      await expect(
        container.querySelectorAll('input[type=radio]:checked'),
      ).toHaveLength(1);
      await expect(
        (
          container.querySelectorAll('input[type=radio]')[
            defaultSelected
          ] as HTMLInputElement
        ).checked,
      ).toBe(true);

      await click(
        container.querySelectorAll('input[type=radio]')[nextSelected],
      );
      await expect(
        container.querySelectorAll('input[type=radio]:checked'),
      ).toHaveLength(1);
      await expect(
        (
          container.querySelectorAll('input[type=radio]')[
            nextSelected
          ] as HTMLInputElement
        ).checked,
      ).toBe(true);
    });
  }
}
