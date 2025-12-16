// throttling is a technique used to control how many times we allow a function to be executed over time. when a javaScript function is said to be throttled with a wait time of X milliseconds. the callback is invoked immediately and cannot be invoked again for the rest of the wait duration

// throttle: run -> lock, wait X ms -> unlock, run -> lock, wait X ms -> unlock, run ...

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

function throttle(func, wait) {
    let isThrottled = false
    // if it's false, function is allowed to run
    // if true, function is blocked
    // it forms closure

    // because throttle function returns a function
    return function (...args) {
        if (isThrottled) return

        // executed the original function, passes the argument
        func.apply(this, args)
        // set is to false after executing the function
        isThrottled = true

        // now runs timeout
        // fun becomes callable again after wait time
        setTimeout(() => {
            isThrottled = false
        }, wait)
    }
}