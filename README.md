# meow-help [![Build Status](https://travis-ci.org/maartenbrakkee/meow-help.svg?branch=master)](https://travis-ci.org/maartenbrakkee/meow-help) [![Coverage Status](https://coveralls.io/repos/github/maartenbrakkee/meow-help/badge.svg?branch=master)](https://coveralls.io/github/maartenbrakkee/meow-help?branch=master)

> Help text generator for [meow](https://github.com/sindresorhus/meow).

![](https://media.giphy.com/media/KjqnOCVXbIkiA/giphy.gif)

## Features

- Generates clean and styled help text
- Simplifies the usage of meow

## Install

```
$ npm install meow-help
```

## Usage

```js
const meowHelp = require("meow-help");
const meow = require("meow");
const foo = require(".");

const flags = {
  rainbow: {
    type: "boolean",
    alias: "r",
    description: "Include a rainbow."
  }
}

const cli = meow(meowHelp(flags), {
	flags: flags
});

foo(cli.input[0], cli.flags);
```
## API

```js
meowHelp(flags, description);
```

Returns a `String` that can be passed as `helpText` to [meow](https://github.com/sindresorhus/meow).

| Name | Type | Required | Description |
| --- | --- | --- | --- |
| flags | `Object` | ✅ | Flags object for meow, extended with descriptions. |
| description | `String` | ❌ | Extra description text shown when `--help` is called. |


## License

MIT © [Maarten Brakkee](https://maartenbrakkee.nl)
