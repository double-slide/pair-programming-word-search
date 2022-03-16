// Pair programmed by Shradda Naidu (@Shraddha-Naidu) and Iaan Johnston (@double-slide)

// Function takes array of array of letters, and word to find (vertical or horizontal)
// Function returns true if word is found vertically or horizontally
// Function returns false if word is not found
// Function does not look for words going backwards, upwards, or diagonal
const wordSearch = (letters, word) => {

  if (word === '' || letters.length === 0) {
    return false;
  }

  const horizontalJoin = letters.map(ls => ls.join(''));
  for (let joinedLetters of horizontalJoin) {
    if (joinedLetters.includes(word)) return true;
  }

  let transposeWordSearch = transpose(letters);

  const fakeVerticalJoin = transposeWordSearch.map(ls => ls.join(''));
  for (let joinedLetters of fakeVerticalJoin) {
    if (joinedLetters.includes(word)) return true;
  }

  return false;

};


module.exports = wordSearch;


// function takes input array
// function returns new array that is transpose of input array
const transpose = function(matrix) {

  let rows = matrix.length;
  let columns = matrix[0].length;
  let transposeArray = [];

  for (let ii = 0; ii < columns; ii++) {
    transposeArray[ii] = [];

    for (let jj = 0; jj < rows; jj++) {
      transposeArray[ii].push(matrix[jj][ii]);
    }
  }
  return transposeArray;
};