## Challenge

Given an integer array `arr` and a mapping function `fn`, return a new array with a transformation applied to each element.

The returned array should be created such that `returnedArray[i] = fn(arr[i], i)`.

Please solve it without the built-in `Array.map` method.

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

## Walkthrough

Despite the instructions requesting you solve without `map` Leetcode actually accepted the solution 🙃.

```javascript
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  return arr.map(fn);
};
```

Next I tried to use `for...of` but ran into problems because I needed to get the index to pass as a parameter so I went with a classic `for` loop.

```javascript
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function (arr, fn) {
  let newArray = arr;
  for (let i = 0; i < arr.length; i++) {
    newArray[i] = fn(arr[i], i);
  }
  return newArray;
};
```

## Opinion - best Leetcode solution

In the editorial there were a few solutions and I was surprised when I saw something with `for...in` since I'm more acclimated with using them in objects but it makes sense that it works here since it can be used to iterate over the indices of an array.

The most ellegant solution in my opinion was the one that allocated the memory using `new Array(len)`. It was performant and readable. Since you allocate the memory upfront it is more performant because the values pushed to the array don't need to be resized.

```javascript
var map = function (arr, fn) {
  const newArr = new Array(arr.length);
  for (let i = 0; i < arr.length; ++i) {
    newArr[i] = fn(arr[i], i);
  }
  return newArr;
};
```
