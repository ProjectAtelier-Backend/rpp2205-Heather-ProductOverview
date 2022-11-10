const sum = (a, b) => {
  return a + b;
}

describe('sample test', () => {
  it('should add 1 + 2 and equal 3', () => {
    expect(sum(1, 2)).toBe(3);
  });
});