interface Props {
  radios: number;
  defaultSelected: number;
}

export default function ExampleComponent({ defaultSelected, radios }: Props) {
  return (
    <form>
      {Array.from({ length: radios }).map((_, i) => (
        <label key={i}>
          <input
            type="radio"
            name="radio"
            defaultChecked={defaultSelected === i}
          />
          Radio {i}
        </label>
      ))}
    </form>
  );
}
