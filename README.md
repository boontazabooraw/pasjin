# Pasjin

A small Express.js API, built mainly for personal use.
Currently deployed on vercel.

---

## Features

- Express.js backend
- CORS enabled (works with any frontend)

---

## Setup

Clone the repo and install dependencies:

```
git clone https://github.com/boontazabooraw/pasjin.git
cd pasjin
npm install
```

Create a `.env` file for local development:

```
PORT=port_of_your_choice
```

---

## ▶️ Running Locally

```
npm run dev
```

Visit:

```
http://localhost:[port_of_your_choice]
Note that it is 3000 by default.
```

---

## Example Usage

The root endpoint supports several query parameters for adding constraints:

- **length**

  Example:

  ```
  GET https://localhost:[PORT]?length={length}
  ```

- **numbers**  
  Include numbers (0-9), turned off by default.

  Example:

  ```
  GET https://localhost:[PORT]?numbers=true
  ```

- **symbols**  
  Include symbols, turned off by default.

  Example:

  ```
  GET https://localhost:[PORT]?symbols=true
  ```

- **Chaining constraints**

    Example:
    
    ```
    GET https://localhost:[PORT]?length=12&numbers=true&symbols=true
    ```

---

### Live (Deployed by me on vercel, personally)
`https://pasjin.vercel.app`