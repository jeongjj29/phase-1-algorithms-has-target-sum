function hasTargetSum(array, target) {
  // Write your algorithm here
  let newArray = [...array];
  for (let number of array) {
    let difference = target - number;
    newArray.shift()
    console.log(target);
    console.log(number);
    console.log(difference);
    
    if (newArray.indexOf(difference, 0) !== -1) {
      return true;
    }
  }
  return false;
}

/* 
  Write the Big O time complexity of your function here
  O(n)
*/

/* 
  Add your pseudocode here
    Takes in an array and the target sum and outputs true or false.
    The hasTargetSum function subtracts a number array from the target, and checks
      to see if that number is in the array, if not, it will move on to the next number 
      in the array.

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));
}

module.exports = hasTargetSum;
