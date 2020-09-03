# linecol2index [![NPM version](https://badge.fury.io/js/linecol2index.svg)](https://npmjs.org/package/linecol2index)

> Maps a line and column number to the index position of a string

## Installation

```sh
$ npm install --save linecol2index
```

## Usage

```js
const {linecol2index} = require('linecol2index');

const text = getTextFromFile('example.py'); // "print("Hello, World!")\nprint("Goodbye!")"
const line = 2
const col = 1

const index = linecol2index(line, col, text);
console.log(text[index]) // 'p'
```

## License

ISC © [Anthony Yang]()
