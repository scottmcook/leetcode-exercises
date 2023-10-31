## Intuition

My intuition was to set a called variable that kept track of whether the function was called or not.

## Approach

I initally flubbed this up because I messed up my conditionals (damn booleans). while this is not the most performative solution I think it's quite readable.

# Code

```
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let called = false;
    return function(...args){
      if (called) {
        return undefined;
      } else {
        called = true;
        return fn(...args);
      }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */

```
