function getRow(puzzle, rowIndex){
  return puzzle[rowIndex];
}

function getColumn(puzzle, columIndex){
  let columnArr = []
  for (let i = 0; i < puzzle.length; i++){
    columnArr.push(puzzle[i][columIndex])
  }
  return columnArr;
}

function getSection(puzzle, x, y){
  let ySection = puzzle.slice(y*3, y*3 + 3);
  let output = [];
  for (let i = 0; i < 3; i++) {
    let xSection = ySection[i].slice(x*3, x*3 + 3)
    output = output.concat(xSection);
  }
  return output;
}

function includes1to9(arr){
  let nums = [1,2,3,4,5,6,7,8,9];
  for (let i = 0; i < 9; i++){
    if (arr.indexOf(nums[i]) === -1){
      return false;
    }
  }
  return true;
}

function sudokuIsValid(arr){
  
  for (let i = 0; i < 9; i++){
    if (includes1to9(getRow(arr, i)) === false) {
      return false;
    }
  }
  
  for (let j = 0; j < 9; j++){
    if (includes1to9(getColumn(arr, j)) === false) {
      return false;
    }
  }
  
  for (let k = 0; k < 3; k++){
    for (let l = 0; l < 3; l++){
      if (includes1to9(getSection(arr, k, l)) === false){
        return false;
      }
    }
  }
  return true;
}

function isSame(grid1, grid2){
  for (let i = 0; i <grid1.length; i++){
    for (let j = 0; j < grid1[i].length; j++){
      if (grid1[i][j] !== grid2[i][j]){
        return false;
      }
    }
  }
  return true;
}


describe('Sudoku Validator', () => {
  let puzzle = [[ 8,9,5,   7,4,2,   1,3,6 ],
                [ 2,7,1,   9,6,3,   4,8,5 ],
                [ 4,6,3,   5,8,1,   7,9,2 ],

                [ 9,3,4,   6,1,7,   2,5,8 ],
                [ 5,1,7,   2,3,8,   9,6,4 ],
                [ 6,8,2,   4,5,9,   3,7,1 ],

                [ 1,5,9,   8,7,4,   6,2,3 ],
                [ 7,4,6,   3,2,5,   8,1,9 ],
                [ 3,2,8,   1,9,6,   5,4,7 ]];

  let p8zzle = [[ 8,9,5,7,4,2,1,3,6 ],
                [ 8,7,1,9,6,3,4,8,5 ],
                [ 4,6,3,5,8,1,7,9,2 ],
                [ 9,3,4,6,1,7,2,5,8 ],
                [ 5,1,7,2,3,8,9,6,4 ],
                [ 6,8,2,4,5,9,3,7,1 ],
                [ 1,5,9,8,7,4,6,2,3 ],
                [ 7,4,6,3,2,5,8,1,9 ],
                [ 3,2,8,1,9,6,5,4,7 ]];
  describe('getRow', () => {
    it('is a function', () => {
      expect(typeof getRow).toEqual('function');
    });
    it('gets the 8th row', () => {
      expect(getRow(puzzle, 8)).toEqual([ 3,2,8,1,9,6,5,4,7 ]);
    });
    it('gets the 0th row', () => {
      expect(getRow(puzzle, 0)).toEqual([ 8,9,5,7,4,2,1,3,6 ]);
    });
  });
  describe('getColumn', () => {
    it('is a function', () => {
      expect(typeof getColumn).toEqual('function');
    });
    it('gets the 0th column', () => {
      expect(getColumn(puzzle, 0)).toEqual([ 8,2,4,9,5,6,1,7,3 ]);
    });
    it('gets the 8th column', () => {
      expect(getColumn(puzzle, 8)).toEqual([ 6,5,2,8,4,1,3,9,7 ]);
    });
  });
  describe('getSection', () => {
    it('is a function', () => {
      expect(typeof getSection).toEqual('function');
    });
    it('gets the (0,0) section', () => {
      expect(getSection(puzzle, 0, 0).sort()).toEqual([ 8,9,5,2,7,1,4,6,3 ].sort());
    });
    it('gets the (0,0) section of p8zzle', () => {
      expect(getSection(p8zzle, 0, 0).sort()).toEqual([ 8,9,5,8,7,1,4,6,3 ].sort());
    });
    it('gets the (1,0) section', () => {
      expect(getSection(puzzle, 1, 0).sort()).toEqual([ 7,4,2,9,6,3,5,8,1 ].sort());
    });
  });
  describe('includes1to9', () => {
    it('is a function', () => {
      expect(typeof includes1to9).toEqual('function');
    });
    it('returns true if all 9 are included', () => {
      expect(includes1to9([1,2,3,4,5,6,7,8,9])).toEqual(true);
    });
    it('returns false if all 9 are not included', () => {
      expect(includes1to9([1,1,2,3,4,5,6,7,8])).toEqual(false);
    });
  });
  describe('sudokuIsValid', () => {
    it('is a function', () => {
      expect(typeof sudokuIsValid).toEqual('function');
    });
    it('returns true if puzzle is valid', () => {
      expect(sudokuIsValid(puzzle)).toEqual(true);
    });
    it('returns false if puzzle is invalid', () => {
      expect(sudokuIsValid(p8zzle)).toEqual(false);
    });
  });
  describe('BONUS: isSame', () => {
    it('is a function', () => {
      expect(typeof isSame).toEqual('function');
    });
    it('returns true if puzzles are identical', () => {
      expect(isSame(puzzle, puzzle.map(r => r.slice()))).toEqual(true);
    });
    it('returns false if puzzles are different', () => {
      expect(isSame(puzzle, p8zzle)).toEqual(false);
    });
  });
});
