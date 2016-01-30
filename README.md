# Blimp - ESLint Shareable Config
[![Build Status](https://travis-ci.org/GetBlimp/eslint-config-blimp.svg?branch=master)](https://travis-ci.org/GetBlimp/eslint-config-blimp)

## Install

```bash
npm install eslint-config-blimp
```

## Usage

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files. You can learn more about [Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the official ESLint website.

To use the JavaScript Standard Style shareable config, first run this:

```bash
npm install eslint-config-blimp babel-eslint eslint-plugin-babel
```

Then, add this to your .eslintrc file:

```
{
  "extends": "blimp"
}
```

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.
