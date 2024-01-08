function mergeSort(arr) {
  // base case
  if (arr.length == 1) {
    return arr;

    //recursive case
  } else {
    let mid = Math.floor(arr.length / 2);
    let leftHalf = mergeSort(arr.slice(0, mid));
    let rightHalf = mergeSort(arr.slice(mid));
    let sortedValue = merge(leftHalf, rightHalf);
    return sortedValue;
  }
}

function merge(leftHalf, rightHalf) {
  let sortedArray = [];
  while (leftHalf.length && rightHalf.length) {
    if (leftHalf[0] < rightHalf[0]) {
      sortedArray.push(leftHalf.shift());
    } else {
      sortedArray.push(rightHalf.shift());
    }
  }
  return sortedArray.concat(leftHalf).concat(rightHalf);
}
console.log(mergeSort([1, 3, 5, 2, 4, 6])); // 1 2 3 4 5 6
