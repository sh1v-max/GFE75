# 📌 HashSet & Map

---

## 🔹 HashSet (Set in JavaScript)

### 📖 What is a HashSet?

A **HashSet** is a data structure that stores **unique values only** and allows **fast existence checks** using hashing.

In JavaScript, this is implemented as `Set`.

---

### 🎯 Key Characteristics

* Stores **only values**, no key–value pairs
* **No duplicates allowed**
* Maintains **insertion order** (⚠️ NOT sorted)
* Lookup, insert, delete → **O(1) average**
* No index-based access

---

### 🧠 Mental Model

> Think of a HashSet as a **checklist**
> “Have I seen this before?” → Yes / No

---

### 🛠️ Basic Operations

#### Create a Set

```js
const set = new Set()
```

```js
const set = new Set([1, 2, 3, 3])
// Result: {1, 2, 3}
```

---

#### Add values

```js
set.add(5)
set.add(5) // ignored
```

---

#### Check existence (O(1))

```js
set.has(5) // true
```

---

#### Delete value

```js
set.delete(5)
```

---

#### Size

```js
set.size
```

---

#### Iterate

```js
for (let val of set) {
  console.log(val)
}
```

---

### 🚫 What Set CANNOT do

* ❌ No indexing (`set[0]` ❌)
* ❌ No sorting
* ❌ No duplicates
* ❌ No key–value mapping

---

### 📌 Accessing by position (Not native)

```js
const fourth = [...set][3] // O(n)
```

---

### 🔁 Common Use Cases (VERY IMPORTANT)

#### 1. Remove duplicates

```js
const unique = [...new Set(arr)]
```

---

#### 2. Seen / visited pattern

```js
const seen = new Set()

for (let x of arr) {
  if (seen.has(x)) {
    // duplicate found
  }
  seen.add(x)
}
```

Used in:

* Duplicate detection
* DFS / BFS
* Cycle detection

---

#### 3. Fast membership check

```js
if (set.has(target)) {
  // constant time check
}
```

---

### ⏱️ Time Complexity

| Operation | Complexity |
| --------- | ---------- |
| add       | O(1) avg   |
| has       | O(1) avg   |
| delete    | O(1) avg   |
| iteration | O(n)       |

---

## 🔹 Map (Hash Table)

### 📖 What is a Map?

A **Map** is a **hash table** that stores **key → value pairs** and allows fast access via keys.

In JavaScript, this is implemented as `Map`.

---

### 🎯 Key Characteristics

* Stores **key–value pairs**
* Keys can be **any data type**
* Maintains insertion order
* Lookup, insert, delete → **O(1) average**
* No key stringification (unlike Object)

---

### 🧠 Mental Model

> Think of a Map as a **dictionary / phonebook**
> Key → Value

---

### 🛠️ Basic Operations

#### Create a Map

```js
const map = new Map()
```

---

#### Set values

```js
map.set("name", "Wazir")
map.set(101, "userId")
map.set(true, "isLoggedIn")
```

* First argument → **key**
* Second argument → **value**

---

#### Get value

```js
map.get("name") // "Wazir"
```

---

#### Check key existence

```js
map.has("name") // true
```

---

#### Delete key

```js
map.delete("name")
```

---

#### Size

```js
map.size
```

---

#### Iterate

```js
for (let [key, value] of map) {
  console.log(key, value)
}
```

---

### 🔑 Special Power: Any Type as Key

```js
const obj = { id: 1 }
map.set(obj, "data")

map.get(obj) // "data"
```

⚠️ Objects as keys **do NOT work correctly** in plain JS objects.

---

### 🔁 Common Use Cases (CRITICAL)

#### 1. Frequency counting

```js
const freq = new Map()

for (let x of arr) {
  freq.set(x, (freq.get(x) || 0) + 1)
}
```

---

#### 2. Store metadata

```js
map.set(userId, userObject)
```

---

#### 3. Cache / memoization

```js
if (map.has(key)) return map.get(key)
```

---

### ⏱️ Time Complexity

| Operation | Complexity |
| --------- | ---------- |
| set       | O(1) avg   |
| get       | O(1) avg   |
| has       | O(1) avg   |
| delete    | O(1) avg   |
| iteration | O(n)       |

---

## 🔹 Map vs Set vs Object (Final Comparison)

| Feature          | Set | Map | Object |
| ---------------- | --- | --- | ------ |
| Stores values    | ✅   | ❌   | ❌      |
| Stores key-value | ❌   | ✅   | ✅      |
| Unique keys      | —   | ✅   | ⚠️     |
| Any type as key  | ❌   | ✅   | ❌      |
| Fast lookup      | ✅   | ✅   | ⚠️     |
| Index access     | ❌   | ❌   | ❌      |

---

## 🧠 Golden Rules (Memorize These)

* **Uniqueness → Set**
* **Frequency / Data → Map**
* **Visited / Seen → Set**
* **Key–Value association → Map**
* **Index / Order → Array**

---

## 🚩 Common Beginner Mistakes

* Using `Set` when index access is needed
* Using `Object` instead of `Map` in DSA
* Assuming Set is sorted
* Forgetting Set ignores duplicates silently
