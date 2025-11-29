// 🧠 REDUCE — WHAT IT ACTUALLY DOES
// - Reduce takes an array and "reduces" it to a single value.
// - It does this by running a callback for each element, carrying an accumulator forward.
// - The callback receives (accumulator, currentValue, currentIndex, array).
// - You can use reduce to sum numbers, flatten arrays, count things, build objects, etc.

// 🔑 INITIAL VALUE BEHAVIOR (the tricky part)
// - If initialValue is provided → accumulator starts as initialValue, loop starts at index 0.
// - If NOT provided:
//       → array must NOT be empty (or throw TypeError — same as real reduce)
//       → accumulator starts as array[0]
//       → loop starts from index 1
// - This is why checking `initialValue !== undefined` is important.

// 🕳️ SPARSE ARRAY BEHAVIOR (holes)
// - Native reduce completely skips missing indices.
//   Example: [1, , 3] → callback does NOT run for the empty slot.
// - To mimic this, we MUST check: `if (i in array)`
// - Otherwise, we would treat missing elements as `undefined` and break correctness.

// ⚠️ EDGE CASES TO HANDLE
// - Callback must be a function → if not, throw TypeError.
// - If array is empty AND no initialValue → throw TypeError (same as native reduce).
// - If array has only one valid element and no initialValue → return that element directly.

// 🛠️ HOW THIS CUSTOM VERSION WORKS
// 1. Detect if initialValue exists → store it in accumulator (or leave undefined).
// 2. Throw if array is empty and no initialValue.
// 3. Loop through each index:
//       - Skip holes using `if (!(i in array)) continue`
//       - If accumulator already set → call callback normally.
//       - Else → first non-hole value becomes the initial accumulator.
// 4. Return the final accumulator after the loop finishes.

// 🎯 End result: Behavior matches native Array.prototype.reduce,
//                including holes, errors, and index rules.

/**
 * @template T, U
 * @param {(previousValue: U, currentValue: T, currentIndex: number, array: T[]) => U} callbackFn
 * @param {U} [initialValue]
 * @return {U}
 */
Array.prototype.myReduce = function (callbackFn, initialValue) {
  // always think of edge cases
  // empty array, or no initialVal... throw error
  // if array len is 1, no initialVal, return the ele
  // what if callback is not a function, return typeError

  var hasInitial = initialValue !== undefined
  var accumulator = hasInitial ? initialValue : undefined
  var array = this
  if (array.length === 0 && initialValue === undefined) {
    throw new TypeError('error')
  }

  for (var i = 0; i < array.length; i++) {
    if (!(i in array)) continue

    if (hasInitial || i > 0) {
      accumulator = callbackFn(accumulator, array[i], i, array)
    } else {
      accumulator = array[i]
    }
  }
  return accumulator

  // throw 'Not implemented!';
}

// blueprint
// define reduce(callback, initialValue)
//   if callback not a function → throw

//   if initialValue exists:
//       acc = initialValue
//       start = 0
//   else:
//       if array is empty → throw
//       acc = array[0]
//       start = 1

//   loop i from start to end of array:
//       acc = callback(acc, array[i], i, array)

//   return acc
