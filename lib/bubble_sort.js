function swap(array, idx1, idx2) {
  let temp = array[idx1];     // save a copy of the first value
  array[idx1] = array[idx2];  // overwrite the first value with the second value
  array[idx2] = temp;         // overwrite the second value with the first value
}

// Use this pseudocode to implement the bubble sort
function bubbleSort(array) {
  let n = array.length;
  let swapped = true;
  // n := length(array)
  // repeat
  //  swapped = false
  while (swapped) { //will give boolean, make it true or not swapped
    //won't run while swapped is false!
    swapped = false; //resets back to false
    //  for i := 1 to n - 1 inclusive do
    for (let i = 1; i <= (n - 1); i++) {
      let currentEle = array[i]
      if (array[i - 1] > currentEle) {
        swap(array, i - 1, i); //passing in numbers,
        swapped = true;
      }
    }
  }
  return array;

}
console.log(bubbleSort([2, 2, 5, 6, 8]));
console.log(bubbleSort([2, 5, 2, 6, 8]));

module.exports = {
  bubbleSort,
  swap
};
