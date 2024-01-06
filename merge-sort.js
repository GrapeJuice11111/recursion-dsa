function mergeSort(array) {
  // the base case
  if (array.length === 1) {
    return array;
  } else {
    let mid = array.length / 2;
    //first the left half is being extracted
    let lefthalf = array.slice(0, mid);
    let righthalf = array.slice(mid);
    let sortedLeftHalf = mergeSort(lefthalf);
    let sortedArray = [];
    for (let i = 0; i < sortedLeftHalf.length; i++) {
      console.log(sortedLeftHalf[i]);

      let sortedRightHalf = mergeSort(righthalf);
      for (j = 0; j < sortedRightHalf.length; j++) {
        console.log(sortedLeftHalf[j]);

        if (sortedLeftHalf[i] < sortedRightHalf[j]) {
          sortedArray.push(sortedLeftHalf[i]);
        } else {
          sortedArray.push(sortedRightHalf[j]);
        }
      }
    }

    return sortedArray;
  }
}

console.log(mergeSort([555, 544, 655, 6777, 4444, 9999]));
