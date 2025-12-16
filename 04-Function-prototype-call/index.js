// what is call?
// the function.prototype.call() method calls the function with given this value and arguments provided individually

Function.prototype.myCall = function (thisArg, ...argArray) {
  // throw 'Not implemented!';

  // If thisArg is null/undefined, default to globalThis
  thisArg = thisArg ?? globalThis

  // Create a temporary unique property so we don't overwrite anything
  const fnKey = Symbol()

  // 'this' refers to the function being called
  thisArg[fnKey] = this

  // Execute function with given thisArg and arguments
  const result = thisArg[fnKey](...argArray)

  // Clean up
  delete thisArg[fnKey]

  return result
}


// how does call work?
function multiplyAge(multiplier = 1){
  return this.age*multiplier
}

const mary = {name: 'Mary', age: 30}
const john = {name: 'John', age: 25}

console.log(multiplyAge.call(mary, 2)) // 60
console.log(multiplyAge.call(john, 3)) // 75