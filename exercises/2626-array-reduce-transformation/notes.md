## Challenge

Given an integer array `nums`, a reducer function `fn`, and an initial value `init`, return a reduced array.

A reduced array is created by applying the following operation: `val = fn(init, nums[0])`, `val = fn(val, nums[1])`, `val = fn(val, nums[2])`, ... until every element in the array has been processed. The final value of val is returned.

If the length of the array is 0, it should return `init`.

Please solve it without using the built-in `Array.reduce` method.

Example 1:

```javascript
Input: arr = [1,2,3], fn = function plusone(n) { return n + 1; }
Output: [2,3,4]
Explanation:
const newArray = map(arr, plusone); // [2,3,4]
The function increases each value in the array by one.
Example 2:
```

```javascript
Input: arr = [1,2,3], fn = function plusI(n, i) { return n + i; }
Output: [1,3,5]
Explanation: The function increases each value by the index it resides in.
Example 3:
```

```javascript
Input: arr = [10,20,30], fn = function constant() { return 42; }
Output: [42,42,42]
Explanation: The function always returns 42.
```

## Walkthrough my solution

I set `finalValue` as my returned accumulated value. Once I had the loop set up I originally used `fn(init, nums[i])` but then realized that the accumulator wasn't being used correctly and I was adding up (or whatever the operation was) the `init` value in each time.

### Final solution

```javascript
/**
 * @param {number[]} nums
 * @param {Function} fn
 * @param {number} init
 * @return {number}
 */
var reduce = function (nums, fn, init) {
  let finalValue = init;

  for (let i = 0; i < nums.length; i++) {
    finalValue = fn(finalValue, nums[i]);
  }
  return nums.length == 0 ? init : finalValue;
};
```

## Leetcode solutions

My solution was one of the higher performants with runtime but lacked effeciency on memory which makes sense since wasn't allocated and we pushed on each loop.

```javascript
var filter = function (arr, fn) {
  let size = 0;
  const newArr = new Array(arr.length);
  for (let i = 0; i < arr.length; ++i) {
    if (fn(arr[i], i)) {
      newArr[size] = arr[i];
      size++;
    }
  }
  // Ensure new array is of length size
  while (newArr.length > size) {
    newArr.pop();
  }
  return newArr;
};
```

The only note this is the fastest if there are few elements to be removed from the array

## Learnings from the editorial summary

- Chaining `.filter().map()` is not effecient because it creates new arrays. You can combine the filter and the map into a single reduce for improved performance.

```javascript
const groceries = [
  { id: 173, name: "Soup" },
  { id: 964, name: "Apple" },
  { id: 535, name: "Cheese" },
];

/** With filter and map */
var names = groceries.filter((item) => item.id > 500).map((item) => item.name);

/** With reduce */
var names = groceries.reduce((accumulator, val) => {
  if (val.id > 500) {
    accumulator.push(val.name);
  }
  return accumulator;
}, []);

console.log(names); // ["Apple", "Cheese"]
```

- The logical operator will return the **last** value it _needed_ to evaluate.
