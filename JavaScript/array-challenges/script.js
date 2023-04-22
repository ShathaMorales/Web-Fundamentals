//file 1

var arr = [5, 3, 7, 1];
var arr2 = [];
var x = 0;
for (var i = 0; i < Array.length; i++) {
  if (x < arr[i]) {
    x = arr[i];
    arr2.push(x);
  }
}
console.log(arr2);

// var x = [];
// for (var j = 0; j < arr.length; j++) {
//     if (arr[j - 1] > arr[j]) {
//         for (var i = arr.length; i > j; i--) {
//             if (arr[j] > arr[i]) {
//                 arr.pop();

//             }
//         }
//     }
// }



//file 2

function alwaysHungry(arr) {
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] == "food") {
      console.log("yummy");
      count++;
    }
  }
  if (count == 0) {
    console.log("I'm hungry");
  }
}

alwaysHungry([3.14, "food", "pie", true, "food"]);
// this should console log "yummy", "yummy"
alwaysHungry([4, 1, 5, 7, 2]);
// this should console log "I'm hungry"
// else {
//     console.log("I'm hungry");
// }



//file 3

function highPass(arr, cutoff) {
  var filteredArr = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > cutoff) {
      filteredArr.push(arr[i]);
    }
  }
  return filteredArr;
}

var result = highPass([6, 8, 3, 10, -2, 5, 9], 5);
console.log(result); // we expect back [6, 8, 10, 9]



//file 4
function betterThanAverage(arr) {
  var sum = 0;
  var avg = 1;
  for (var i = 0; i < arr.length; i++) {
    sum = arr[i] + sum;
  }
  avg = sum / arr.length;
  var count = 0;
  for (var i = 0; i < arr.length; i++) {
    if (arr[i] > avg) {
      count++;
    }
  }
  return count;
}

var result = betterThanAverage([6, 8, 3, 10, -2, 5, 9]);
console.log(result); // we expect back 4



//file 5
function reverse(arr) {
  var arr2 = [];
  var j = 0;
  for (var i = arr.length - 1; i >= 0; i--) {
    arr2[j] = arr[i];
    j++;
  }
  arr = arr2;
  return arr;
}

var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]



//file 6
function fibonacciArray(n) {
  var fibArr = [0, 1];
  var sum = 0;
  for (var i = 0; i < n - 2; i++) {
    sum = fibArr[fibArr.length - 1] + fibArr[fibArr.length - 2];
    fibArr.push(sum);
  }
  return fibArr;
}

var result = fibonacciArray(10);
console.log(result); // we expect back [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
