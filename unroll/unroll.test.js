const unroll = require("./unroll");

describe('unroll function', () => {
  it('should unroll a square array in a spiral manner', () => {
    const square = [
      [1, 2, 3, 4],
      [5, 6, 7, 8],
      [9, 10, 11, 12],
      [13, 14, 15, 16]
    ];
    expect(unroll(square)).toEqual([1, 2, 3, 4, 8, 12, 16, 15, 14, 13, 9, 5, 6, 7, 11, 10]);
  });

  it('should handle smaller square arrays', () => {
    const smallerSquare = [
      ["a", "b", "c"],
      ["d", "e", "f"],
      ["g", "h", "i"]
    ];
    expect(unroll(smallerSquare)).toEqual(["a", "b", "c", "f", "i", "h", "g", "d", "e"]);
  });

  it('should handle a 1x1 square array', () => {
    const oneByOneSquare = [[42]];
    expect(unroll(oneByOneSquare)).toEqual([42]);
  });

  it('should handle a square array with odd dimensions', () => {
    const oddSquare = [
      [1, 2, 3],
      [4, 5, 6],
      [7, 8, 9]
    ];
    expect(unroll(oddSquare)).toEqual([1, 2, 3, 6, 9, 8, 7, 4, 5]);
  });

  it('should handle an empty square array', () => {
    const emptySquare = [];
    expect(unroll(emptySquare)).toEqual([]);
  });
});