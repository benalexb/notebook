const { chunk, chunk2, chunk3 } = require('./chunk');

describe('chunk', () => {
  it('chunk divides an array of 10 elements with chunk size 2', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const chunked = chunk(arr, 2);
    expect(chunked).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
  });

  it('chunk divides an array of 3 elements with chunk size 1', () => {
    const arr = [1, 2, 3];
    const chunked = chunk(arr, 1);
    expect(chunked).toEqual([[1], [2], [3]]);
  });

  it('chunk divides an array of 5 elements with chunk size 3', () => {
    const arr = [1, 2, 3, 4, 5];
    const chunked = chunk(arr, 3);
    expect(chunked).toEqual([[1, 2, 3], [4, 5]]);
  });

  it('chunk divides an array of 13 elements with chunk size 5', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const chunked = chunk(arr, 5);
    expect(chunked).toEqual([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]);
  });
});

describe('chunk2', () => {
  it('chunk divides an array of 10 elements with chunk size 2', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const chunked = chunk2(arr, 2);
    expect(chunked).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
  });

  it('chunk divides an array of 3 elements with chunk size 1', () => {
    const arr = [1, 2, 3];
    const chunked = chunk2(arr, 1);
    expect(chunked).toEqual([[1], [2], [3]]);
  });

  it('chunk divides an array of 5 elements with chunk size 3', () => {
    const arr = [1, 2, 3, 4, 5];
    const chunked = chunk2(arr, 3);
    expect(chunked).toEqual([[1, 2, 3], [4, 5]]);
  });

  it('chunk divides an array of 13 elements with chunk size 5', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const chunked = chunk2(arr, 5);
    expect(chunked).toEqual([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]);
  });
});

describe('chunk3', () => {
  it('chunk divides an array of 10 elements with chunk size 2', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    const chunked = chunk3(arr, 2);
    expect(chunked).toEqual([[1, 2], [3, 4], [5, 6], [7, 8], [9, 10]]);
  });

  it('chunk divides an array of 3 elements with chunk size 1', () => {
    const arr = [1, 2, 3];
    const chunked = chunk3(arr, 1);
    expect(chunked).toEqual([[1], [2], [3]]);
  });

  it('chunk divides an array of 5 elements with chunk size 3', () => {
    const arr = [1, 2, 3, 4, 5];
    const chunked = chunk3(arr, 3);
    expect(chunked).toEqual([[1, 2, 3], [4, 5]]);
  });

  it('chunk divides an array of 13 elements with chunk size 5', () => {
    const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
    const chunked = chunk3(arr, 5);
    expect(chunked).toEqual([[1, 2, 3, 4, 5], [6, 7, 8, 9, 10], [11, 12, 13]]);
  });
});
