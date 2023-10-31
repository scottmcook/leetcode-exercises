## Challenge

Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.

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

Coming from the apply transform over array exercise this one was a little less challenging.

First I tried to use the same approach from the previous approach and allocate the memory. I quickly realized this was a bad idea because I would end up with blank items once the values that were not truth were filtered out...

So I used the `Boolean` object to get my truthy values and then push them to the new array.

```javascript
/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (Boolean(fn(arr[i], i))) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
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

- The Nullish Coalescing operator `??` is identical to `||` except it only treats `null` and `undefined` as falsy.
- The logical operator will return the **last** value it _needed_ to evaluate.
