## Intuition

The problem titled "Container With Most Water" poses a  algorithmic challenge that involves finding two lines in a given array such that, when combined with the x-axis, they form a container with the maximum amount of water. While the core problem is well-defined, the choice of terminology in the problem description lead to some confusion.

## Concerns

**Misleading Terminology**: The problem description refers to the array elements as "height," which implies that these values directly represent the area of the container. This is misleading because the actual area of the container is the product of the width and the minimum height between two lines. It would be more accurate to refer to these values as "line heights" or "bar heights."

**Imprecise Formulation**: The problem's wording could be more precise. It should explicitly state that the goal is to maximize the area formed by the two lines and the x-axis, with the restriction that the lines cannot slant. This clarification would help eliminate potential confusion.

**Edge Cases**: The problem does not explicitly address the case where one of the lines has a height of 0, which can be problematic when implementing the solution. A clearer problem statement would explicitly mention how to handle this situation.



<h2><a href="https://leetcode.com/problems/container-with-most-water">11. Container With Most Water</a></h2><h3>Medium</h3><hr><p>You are given an integer array <code>height</code> of length <code>n</code>. There are <code>n</code> vertical lines drawn such that the two endpoints of the <code>i<sup>th</sup></code> line are <code>(i, 0)</code> and <code>(i, height[i])</code>.</p>

<p>Find two lines that together with the x-axis form a container, such that the container contains the most water.</p>

<p>Return <em>the maximum amount of water a container can store</em>.</p>

<p><strong>Notice</strong> that you may not slant the container.</p>

<p>&nbsp;</p>
<p><strong class="example">Example 1:</strong></p>
<img alt="" src="https://s3-lc-upload.s3.amazonaws.com/uploads/2018/07/17/question_11.jpg" style="width: 600px; height: 287px;" />
<pre>
<strong>Input:</strong> height = [1,8,6,2,5,4,8,3,7]
<strong>Output:</strong> 49
<strong>Explanation:</strong> The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
</pre>

<p><strong class="example">Example 2:</strong></p>

<pre>
<strong>Input:</strong> height = [1,1]
<strong>Output:</strong> 1
</pre>

<p>&nbsp;</p>
<p><strong>Constraints:</strong></p>

<ul>
	<li><code>n == height.length</code></li>
	<li><code>2 &lt;= n &lt;= 10<sup>5</sup></code></li>
	<li><code>0 &lt;= height[i] &lt;= 10<sup>4</sup></code></li>
</ul>

