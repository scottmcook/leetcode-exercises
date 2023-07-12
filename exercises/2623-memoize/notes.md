## Intuition and approach

I knew I needed to set a conditionally set a variable for cacheing the results.

Upon reflection and referencing the _Editorial_, I messed up quite a bit of syntax and learned that the `in` operator can be used outside a `for...in` loop.

I learned a new approach of when the arguments are an array of numbers, a convenient way to convert them into a string key is with `JSON.stringify()`.

## Tutorials

I read the editorial and watched a [Web Dev Simplified](https://www.youtube.com/watch?v=WbwP4w6TpCk) explanation.

### Use cases

This is good for caching results of a network API call.

A potential downside of memoizing network requests is the risk of data staleness. If the value associated with a particular key in the database changes, the memoized function may still return the old cached result, leaving the user unaware of any updates.

# Code

```javascript
/**
 * @param {Function} fn
 */
function memoize(fn) {
  let cache = {};
  return function (...args) {
    const key = JSON.stringify(args);
    console.log(key);
    if (key in cache) {
      return cache[key];
    } else {
      var functionOutput = fn(...args);
      cache[key] = functionOutput;
      return functionOutput;
    }
  };
}

/**
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1
 */
```
