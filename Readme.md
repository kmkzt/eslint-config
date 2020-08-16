# @kmkzt/eslint-config

## install

```shell
yarn add -D @kmkzt/eslint-config
```

## How to use

### For JavaScript

```js
module.exports = {
  extends: ['@kmkzt'],
}
```

### For Node

```js
module.exports = {
  extends: ['@kmkzt/eslint-config/node'],
}
```

### For TypeScript

```js
module.exports = {
  extends: ['@kmkzt/eslint-config/react'],
}
```

### For React

```js
module.exports = {
  extends: ['@kmkzt/eslint-config/react'],
}
```

### Custom Settings

```js
module.exports = {
  extends: ['@kmkzt/eslint-config/lib/javascript'],
  overrides: [
    {
      files: ['*.tsx', '*.jsx'],
      extends: ['@kmkzt/eslint-config/lib/react'],
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: ['@kmkzt/eslint-config/lib/typescript'],
    },
    {
      files: ['*.test.*', '*.spec.*'],
      extends: ['@kmkzt/eslint-config/lib/jest'],
    },
    {
      files: ['scripts/**'],
      extends: ['@kmkzt/eslint-config/lib/node'],
    },
  ],
}
```
