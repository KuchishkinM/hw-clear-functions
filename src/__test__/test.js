import healthFunction from '../app';

test('healthy test', () => {
  const data = { name: 'Маг', health: 90 };
  const result = healthFunction(data);
  expect(result).toBe('healthy');
});

test('wounded test', () => {
  const data = { name: 'Маг', health: 35 };
  const result = healthFunction(data);
  expect(result).toBe('wounded');
});

test('critical test', () => {
  const data = { name: 'Маг', health: 5 };
  const result = healthFunction(data);
  expect(result).toBe('critical');
});
