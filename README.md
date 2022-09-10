![](https://img.shields.io/badge/niicode-test-blue.svg)

# niicode-test

> A testing library that helps you test your code in a more efficient way.
> 
> This library is still in development and is not ready for production use.


## Prerequisites

- [Node.js](https://nodejs.org/en/) (>= 8.0.0)
- [npm](https://www.npmjs.com/) (>= 5.0.0)

## Install

```
$ npm install --save niicode-test
```

## Usage

- Create a test file named `test.js` in the root of your project.
- Import the `test` function from `niicode-test` and use it to test your code.

```js
const { test, describe, expect } = require('niicode-test/module/test.js');

describe('test', () => {
  test('should return true', () => {
    expect(true).toBe(true);
  });
});
```

## Run tests

- In your package.json file, add a `test` script that runs the `test.js` file.

```json
{
  "scripts": {
    "test": "node ${name of your test file}"
  }
}
```

```
$ npm test
```

## API

Type: `function`

### test(name, fn)

#### name
> Type: `string`

The name of the test.

#### fn
> Type: `function`
> 
> Returns: `void`

## Contributing
- Fork this repository on GitHub. [Fork](https://github.com/niicode/niicode-test.git)
- Clone your forked repository to your local machine.
- Create a new branch for your changes.
- Make your changes.
- Commit your changes.
- Push your changes to your forked repository.
- Create a pull request.
- Wait for your pull request to be reviewed and merged.
- Celebrate! 🎉

## License

MIT © [niicode](./MIT.md)
