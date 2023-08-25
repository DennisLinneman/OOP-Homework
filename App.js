
var multiDimensionalArray = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
  ];
  
  function logTwoDimensionalArray(arr) {
    for (var i = 0; i < arr.length; i++) {
      for (var j = 0; j < arr[i].length; j++) {
        console.log(arr[i][j]);
      }
    }
  }
  

  logTwoDimensionalArray(multiDimensionalArray);

  var threeDimensionalArray = [
    [
      [1, 2],
      [3, 4]
    ],
    [
      [5, 6],
      [7, 8]
    ],
    [9, 10]
  ];

  function findLargerNumber(num1, num2) {
    if (num1 > num2) {
      return num1;
    } else {
      return num2;
    }
  }
  
  console.log(findLargerNumber(5, 10)); 

  function compareValues(value1, value2) {
    if (value1 === value2) {
      return "Values are equal.";
    } else {
      return "Values are different.";
    }
  }
  
  console.log(compareValues(5, 5)); 
  console.log(compareValues(5, "5")); 