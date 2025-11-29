/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */

// let i = 0
// function increment(){
//   i++
// }

// only goal is to return a function that executed fun after waiting for wait time without any disturbance
// if another call happen during wait, restart the timer

export default function debounce(func, wait) {
  // throw 'Not implemented!';
  let timeoutId 

  return function(...args) {
    const context = this
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      func.apply(context, args);
    }, wait);
  };

  // timeoutId = setTimeout(() => {func}, wait)
  // console.log(timeoutId)
  // clearTimeout(timeoutId)
}

let i = 0;
function increment() { i++; }
const debounced = debounce(increment, 10);

debounced();
console.log(i); // 0
setTimeout(() => console.log(i), 20); // should log 1 ✅

// what is debounce?
// debounce is a technique used to limit the rate at which a function can fire. it ensures that a function is only executed after a certain amount of time has passed since it was last invoked. if the function is called again before that time period elapses, the timer resets

// example:
let j = 0;
function increment() {
  j++;
}
const debouncedIncrement = debounce(increment, 100);

// t = 0: Call debouncedIncrement().
debouncedIncrement(); // i = 0
// t = 50: i is still 0 because 100ms have not passed.
// t = 100: increment() was invoked and i is now 1.

// ========================================================
// why using this binding?
// because func might be a method of an object, and when we call it later, we want it to have the correct 'this' context.

// when we pass a function around, for example, storing it in a variable or passing it as a callback, the original context (the object it belongs to) can be lost. by using func.apply(context, args), we ensure that when func is eventually called, it has the correct this value (the context in which the debounced function was called) and receives the appropriate arguments

// Follow up
// Debounce with a cancel() method to cancel delayed invocations and a flush() method to immediately invoke them.
// Implement throttle, which is similar to debounce but a little different.
