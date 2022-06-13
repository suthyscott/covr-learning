## useRef: 
https://dmitripavlutin.com/react-useref-guide/


useRef(initialValue) is a built-in React hook that accepts one argument as the initial value and returns a reference (aka ref). A reference is an object having a special property current.

There are 2 rules to remember about references:
- The value of the reference is persisted (stays the same) between component re-renderings;
- Updating a reference doesn't trigger a component re-rendering.