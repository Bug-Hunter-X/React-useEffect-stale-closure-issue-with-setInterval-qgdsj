# React useEffect Stale Closure Issue
This repository demonstrates a common error in React involving closures and stale state within the `useEffect` hook when using `setInterval`.

The `bug.js` file contains the buggy code. It attempts to increment a counter every second using `setInterval`, but due to a closure over the initial state value, the counter doesn't increment correctly.

The `bugSolution.js` file provides the corrected code using the functional update form of `setCount` to resolve the stale closure problem.