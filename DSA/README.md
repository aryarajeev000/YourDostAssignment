# Second Largest Unique Element — Binary Search Approach
## Overview

This project finds the second largest unique element in an array of integers.
The logic is implemented in Java, Python, and JavaScript, all using the same Binary Search–based approach.

If the array does not contain at least two unique values, the function returns -1.

## Approach

The solution follows these steps:

Sort the array in ascending order.

Identify the largest element (last element in the sorted array).

Use Binary Search to efficiently locate the largest element that is strictly less than the maximum element.

This value becomes the second largest unique value.

If no such element exists, return -1.

## Time & Space Complexity
### Time Complexity

Sorting: O(n log n)

Binary Search: O(log n)
Total: O(n log n)

### Space Complexity

Sorting is performed in-place (Java & Python lists, JS engine optimized)

O(1) extra space

## Why Not Use a Priority Queue and set?

A Priority Queue (Max-Heap) also could solve this problem, but it isn’t ideal here:

Inserting all elements into a heap still takes O(n log n).

It requires extra memory.

You still need to pop multiple elements until the second unique largest is found.

Sorting is simpler, faster in practice, and avoids extra data structures.

same for set we need extra space to solve this problem.

Because of this, sorting + binary search is the cleanest and most efficient option for this problem.

## Sample Inputs & Outputs
Case 1 — Normal Case

Input:

6
4 2 9 9 9 7


Output:

second largest unique element is: 7

Case 2 — All Elements Same

Input:

5
8 8 8 8 8


Output:

-1
Not enough unique elements

Case 3 — Only One Element

Input:

1
10


Output:

-1
Not enough unique elements

Case 4 — Multiple Duplicates but Valid Answer

Input:

7
5 5 4 4 4 3 3


Output:

second largest unique element is: 4

Case 5 — Largest Element Appears Multiple Times

Input:

6
1 2 2 3 5 5


Output:

second largest unique element is: 3

##Languages Implemented

Java

Python

JavaScript (Node.js)

All three use the same logic based on your binary search approach.
