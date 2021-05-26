# ESlint Config for ReactJS TypeScript

A Standard ESlint rules for ReactJS with TypeScript project

## Installation

```
npm i @thecodejs/eslint-config-react-ts --save-dev
```

## Usage
These rules can be only used in .eslintrc file to enforce your *eslint* extension to follow these rules. All you need to install ```dbaeumer.vscode-eslint``` extension in your *VS Code* editor.

In your project, create a **.eslintrc.json** file and write below code.

```json
{
    "extends": ["@thecodejs/eslint-config-react-ts"],
    "env": {},
    "parserOptions": {},
    "rules": {}
}
```


## For Developer
To publish this package, execute following command:
```
npm publish --access public
```


## License
See in LICENSE
