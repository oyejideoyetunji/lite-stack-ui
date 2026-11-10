export function isEmpty(value: unknown) {
  return (
    value === undefined ||
    value === null ||
    (typeof value === 'string' && !value)
  );
}
