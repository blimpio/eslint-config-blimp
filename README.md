# Blimp - ESLint Shareable Config
[![Build Status](https://travis-ci.org/GetBlimp/eslint-config-blimp.svg?branch=master)](https://travis-ci.org/GetBlimp/eslint-config-blimp)

## Install

```bash
npm install --save-dev eslint eslint-config-blimp
```

Then, add this to your `.eslintrc` file:

```js
{
  "extends": ["blimp"],
  "rules": {
    // your overrides
  }
}
```

*Note: We omitted the `eslint-config-` prefix since it is automatically assumed by ESLint.*

Shareable configs are designed to work with the `extends` feature of `.eslintrc` files. You can learn more about [Shareable Configs](http://eslint.org/docs/developer-guide/shareable-configs) on the official ESLint website.

You can override settings from the shareable config by adding them directly into your
`.eslintrc` file.
