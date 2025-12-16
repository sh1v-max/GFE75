// throttling is a technique used to control how many times we allow a function to be executed over time. when a javaScript function is said to be throttled with a wait time of X milliseconds. the callback is invoked immediately and cannot be invoked again for the rest of the wait duration

// example:

let i = 0;
function increment() {
  i++;
}
const throttledIncrement = throttle(increment, 100);

// t = 0: Call throttledIncrement(). i is now 1.
throttledIncrement(); // i = 1

// t = 50: Call throttledIncrement() again.
//  i is still 1 because 100ms have not passed.
throttledIncrement(); // i = 1

// t = 101: Call throttledIncrement() again. i is now 2.
//  i can be incremented because it has been more than 100ms
//  since the last throttledIncrement() call at t = 0.
throttledIncrement(); // i = 2

// =======================================================
// implementation of throttle function

export default function throttle(func, wait) {
  // throw 'Not implemented!';
  // forming a closure to remember whether the fun is blocked
  let isThrottled = false;

  // first call, run immediately
  return function (...args) {
    if (isThrottled) return;

    func.apply(this, args);
    isThrottled = true;

    // after wait ms, run again
    setTimeout(() => {
      isThrottled = false;
    }, wait);
  }
}