// how it works?
// iterate through the array
// if the curr elem is an array, call recursion
// else, just push as is
// return

export default function flatten(value) {
  // throw 'Not implemented!';
  let res = []

  for (let item of value){
    // to check if curr element is an array
    if(Array.isArray(item)){
      // calling recursion
      // concat merge
      res = res.concat(flatten(item))
    } else {
      // if not an array, just push as is
      res.push(item)
    }
  }
  return res
}

// using reducer function

export default function flatten(value) {
  // throw 'Not implemented!';
  return value.reduce((acc, item) => {
    // if the curr element is an array, call recursion
    // or use the element as is
    const value = Array.isArray(item) ? flatten(item) : item;

    // concat returns a new array
    // if val is number, acc.concat(num)
    // if val is an array, acc.concat(arr) 
    return acc.concat(value);
  }, 
  // initial value of acc
  [])
}
