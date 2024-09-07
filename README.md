# @st0pcha/genpass

## About

Just password generator for Node.js and TypeScript

## Install

```
npm install @st0pcha/genpass
```

```
yarn add @st0pcha/genpass
```

```
pnpm add @st0pcha/genpass
```

### Usage

```ts
import { generatePassword, generatePasswords } from '@st0pcha/genpass'

// generate password with default settings (same with generatePasswords())
console.log(generatePassword())

// generate password with 48 symbols length and without uppercase
console.log(generatePassword({ length: 48, withUpperCase: false }))

// generate 3 passwords without symbols and numbers
console.log(generatePasswords(3, { withSymbols: false, withNumbers: false }))
```
