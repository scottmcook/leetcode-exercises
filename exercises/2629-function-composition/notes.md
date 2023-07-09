# Problem

Given an array of functions `[f1, f2, f3, ..., fn]`, return a new function fn that is the function composition of the array of functions.

The function composition of `[f(x), g(x), h(x)] is fn(x) = f(g(h(x)))`.

The function composition of an empty list of functions is the identity function `f(x) = x`.

You may assume each function in the array accepts one integer as input and returns one integer as output.

## Intuition

I orginally thought a `reduce` function would be used because it was the only method I knew that dealt in accumulations.

## Approach

I originally tried to spread the `functions` param because I thought that was needed to loop through the argument. It turns out the `reduceRight` method did a lot of the heavy lifting for you.

## Code

```
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
	return function(x) {
        return functions.reduceRight((acc, currentFunction) => currentFunction(acc),x)
    }
};
```
