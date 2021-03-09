const sum = (a, b) => a + b
describe('example', () => {
  it('sum 1 1 will be 2', () => {
    expect(sum(1, 1)).toBe(2)
  });
});