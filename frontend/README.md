# Full Stack Crypto Firewall Project

## Overview
This project is a secure full-stack application with three main components:
- **Frontend**: React (Vite) SPA for user interaction and client-side encryption.
- **Firewall**: Node.js-based middleware for request filtering and security.
- **Backend**: Node.js/Express server for cryptographic data handling and business logic.

---

## Frontend

**Tech Stack:**
- React (Vite)
- Client-side AES encryption (see `src/utils/crypto.jsx`)

**How it works:**
1. User enters data in the form.
2. Data is encrypted using AES before sending to the backend.
3. Encrypted data is sent via API service (`src/services/api.jsx`).
4. Response is decrypted and displayed.

---

## Backend

**Tech Stack:**
- Node.js/Express
- AES cryptography for secure data handling

**How it works:**
1. Receives encrypted data from the frontend.
2. Decrypts data using AES (key from config).
3. Processes and responds (optionally encrypting the response).

---

## Firewall

**Tech Stack:**
- Node.js
- Rule-based request filtering

**How it works:**
1. Inspects incoming requests for security threats (IP filtering, rate limiting, payload inspection).
2. Forwards valid requests to the backend.
3. Blocks and logs invalid requests.

---

## Cryptography: AES Explained

**Algorithm Used:** AES (Advanced Encryption Standard)

### Mathematical Foundation
AES is a symmetric block cipher that operates on 128-bit blocks and uses keys of 128, 192, or 256 bits. The math behind AES involves:

1. **Finite Field Arithmetic ($GF(2^8)$):**
	- AES uses arithmetic in the Galois Field $GF(2^8)$, meaning all operations are performed on bytes (8 bits) using modular arithmetic.
	- Addition is bitwise XOR, multiplication is more complex (using irreducible polynomials).

2. **SubBytes (S-Box):**
	- Each byte is replaced using a nonlinear substitution table (S-Box), which is constructed using multiplicative inverses in $GF(2^8)$ and affine transformations.

3. **ShiftRows:**
	- Rows of the state matrix are cyclically shifted to the left by different offsets, providing diffusion.

4. **MixColumns:**
	- Each column is transformed using matrix multiplication in $GF(2^8)$, further mixing the data.

5. **AddRoundKey:**
	- The state matrix is XORed with a round key derived from the main key using a key schedule algorithm.

### AES Rounds
- AES-128 uses 10 rounds, AES-192 uses 12, AES-256 uses 14.
- Each round consists of SubBytes, ShiftRows, MixColumns (except the last round), and AddRoundKey.

### Security
- AES is considered secure due to its strong mathematical foundation and resistance to known cryptanalytic attacks.
- The use of $GF(2^8)$ arithmetic and S-Box design ensures nonlinearity and confusion, making it hard to reverse without the key.

---

## How Everything Works Together
1. **Frontend** encrypts user data and sends it to the **firewall**.
2. **Firewall** checks the request against security rules.
3. If valid, the request is forwarded to the **backend**.
4. **Backend** decrypts, processes, and responds (optionally encrypting the response).
5. **Frontend** decrypts and displays the result.

---

## Security & Best Practices
- **End-to-End Encryption:** Data is encrypted from client to server.
- **Layered Security:** Firewall adds an extra layer before backend.
- **Modular Design:** Each part (frontend, firewall, backend) is separated for maintainability and scalability.

---

## References
- [AES Wikipedia](https://en.wikipedia.org/wiki/Advanced_Encryption_Standard)
- [Galois Field Math](https://en.wikipedia.org/wiki/Finite_field)
