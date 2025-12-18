### **What SessionStorage is**

**SessionStorage** is very similar to LocalStorage, but with **one big difference**:

* Data **lives only for the current browser tab**
* Once you **close the tab**, the data is gone
* Still **key-value pairs**, **string only**
* Storage limit is usually **5–10 MB per domain**, same as LocalStorage

Think of it like **sticky notes that vanish when the tab is closed**.

---

### **Basic methods** (same as LocalStorage)

1. **Set data**

```js
sessionStorage.setItem("name", "Wazir");
```

2. **Get data**

```js
const name = sessionStorage.getItem("name"); // "Wazir"
```

3. **Remove data**

```js
sessionStorage.removeItem("name");
```

4. **Clear all**

```js
sessionStorage.clear();
```

5. **Store objects**

```js
const user = { name: "Wazir", age: 23 };
sessionStorage.setItem("user", JSON.stringify(user));

const storedUser = JSON.parse(sessionStorage.getItem("user"));
```

---

### **Key difference from LocalStorage**

| Feature  | LocalStorage                             | SessionStorage                         |
| -------- | ---------------------------------------- | -------------------------------------- |
| Lifetime | Persistent                               | Until tab closed                       |
| Scope    | Across all tabs of same origin           | Only current tab                       |
| Max size | ~5–10 MB                                 | ~5–10 MB                               |
| Use case | Remember theme, login, cart, preferences | Temporary state, one-time session data |