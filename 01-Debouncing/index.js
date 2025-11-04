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