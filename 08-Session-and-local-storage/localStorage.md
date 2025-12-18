### **What LocalStorage is**

**LocalStorage** is a **browser storage** that lets you save data **as key-value pairs** right in the user’s browser.

* Data **persists even if you close the browser or reload the page**
* Storage limit is usually **5–10 MB per domain**
* Data is **specific to the domain**
* Only stores **strings**

Think of it like a small permanent notepad in the browser.

---

### **Basic methods**

1. **Set data**

```js
localStorage.setItem("name", "Wazir");
```

2. **Get data**

```js
const name = localStorage.getItem("name"); // "Wazir"
```

3. **Remove data**

```js
localStorage.removeItem("name");
```

4. **Clear all**

```js
localStorage.clear();
```

5. **Check key**

```js
localStorage.key(0); // returns the key at index 0
```

---

### **Important notes**

* Only stores **strings**.

  * If you want to store objects → use JSON:

```js
const user = { name: "Wazir", age: 23 };
localStorage.setItem("user", JSON.stringify(user));

const storedUser = JSON.parse(localStorage.getItem("user"));
```

* **Synchronous API** → blocking. Don’t store huge data.
* **Not secure** → anyone can inspect/edit in browser console.

---

### **When to use**

* Save user preferences
* Keep themes, settings, or small app state
* Remember last page, cart, or session-like data **without server**