## What cookies are

**Cookies are tiny pieces of data stored by the browser and automatically sent to the server with every request.**

That’s the key difference.
LocalStorage / SessionStorage → browser only
**Cookies → browser + server**

---

## Size & limits (important)
* Max size: **~4 KB** (very small)
* Stored per domain
* Can expire or live for a session
* Sent with **every HTTP request** → adds overhead

---

## Why cookies exist

Cookies exist mainly for **server-side needs**:

* Authentication
* Sessions
* Tracking (analytics, ads)
* Remembering user identity

Before LocalStorage existed, cookies were abused for everything.

---

## Basic cookie operations

### Set a cookie (JS)

```js
document.cookie = "user=Wazir; path=/; max-age=3600";
```

### Read cookies

```js
console.log(document.cookie);
```

⚠️ Returns **all cookies as a single string** → parsing required.

---

## Common cookie attributes (very important)

### `expires` / `max-age`

Controls lifetime

```text
max-age=3600   // 1 hour
```

### `path`

Where the cookie is available

```text
path=/
```

### `Secure`

Only sent over HTTPS

### `HttpOnly`

* **Cannot be accessed by JavaScript**
* Protects from XSS
* Used for auth tokens

### `SameSite`

Controls cross-site sending

* `Strict`
* `Lax`
* `None` (must be Secure)

---

## Cookie types (interview-friendly)

### 1. Session cookies

* No expiry
* Deleted when browser closes

### 2. Persistent cookies

* Expiry set
* Survive browser restart

---

## Cookies vs Storage (no fluff)

| Feature        | Cookies         | LocalStorage  | SessionStorage  |
| -------------- | --------------- | ------------- | --------------- |
| Sent to server | ✅ Yes           | ❌ No          | ❌ No            |
| Size           | ~4 KB           | ~5–10 MB      | ~5–10 MB        |
| Security       | Can be HttpOnly | JS-accessible | JS-accessible   |
| Lifetime       | Configurable    | Permanent     | Tab lifetime    |
| Best for       | Auth, sessions  | Preferences   | Temporary state |

---

## Brutal truth

* **Never store JWT or sensitive data in LocalStorage**
* **Auth tokens belong in HttpOnly Secure cookies**
* Cookies are annoying to work with, but **necessary**
