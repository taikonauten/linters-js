<p align="center">
  <img src="https://i.imgur.com/dV1aZjJ.png" title="Taikonauten">
</p>

<h1 align="center">Taikonauten JavaScript Linter</h1>

<p>&nbsp;</p>

This package provides the JavaScript linter used at [Taikonauten](https://taikonauten.com).

## Description

[ESLint](https://eslint.org/) is a modern tool to lint JavaScript files. The `.eslintrc` file shipped with this repository contains the configuration to properly setup ESLint, while the `eslint/index.js` file contains the current ruleset used at Taikonauten. Most of the rules are default settings for ESLint and more or less a standard for writing JavaScript.

## Configuration

The following important settings are applied to all JavaScript files generated or worked with at Taikonauten:

* Spaces are used for indentation. The default indent is 2 spaces.
* Single quotes are used for regular strings.
* Console statements are not allowed.
* Unused variables are not allowed.
* Proper spacing before and after braces, and between keywords.
* Maximum of 2 empty lines between blocks.
* Minimum of 1 blank line before return statements.

## Installation

Run the following two commands in your terminal to install the package:

```bash
npm install --save-dev @taikonauten/linters-js
```

Create a `.eslintrc` file in your project root and use the following content for it:

```json
{
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "module": true,
      "modules": true
    }
  },
  "env": {
    "es6": true,
    "browser": true,
    "node": true
  },
  "plugins": [
    "babel"
  ],
  "extends": "./node_modules/@taikonauten/linters-js/eslint/index.js"
}

```

After that, make sure your editor or IDE supports the `.eslintrc` file. PhpStorm works with it right out of the box.  
For Sublime Text, install the [SublimeLinter-eslint](https://github.com/SublimeLinter/SublimeLinter-eslint) plugin.  
For Atom, install the [linter-eslint](https://atom.io/packages/linter-eslint) plugin.  
For VS Code, install the [ESLint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint) plugin.

## Testing

Use the `npm run test` command.

* The `correct.js` file MUST not return errors.
* The `wrong.js` file MUST return 12 errors.

---

Made with ♡ at Taikonauten
