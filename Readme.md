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
  extends: ['@kmkzt/node'],
}
```

### For TypeScript

```js
module.exports = {
  extends: ['@kmkzt/react'],
}
```

### For React

```js
module.exports = {
  extends: ['@kmkzt/react'],
}
```

### Custom Settings

```js
module.exports = {
  extends: ['@kmkzt/lib/javascript'],
  overrides: [
    {
      files: ['*.tsx', '*.jsx'],
      extends: ['@kmkzt/lib/react'],
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: ['@kmkzt/lib/typescript'],
    },
    {
      files: ['*.test.*', '*.spec.*'],
      extends: ['@kmkzt/lib/jest'],
    },
    {
      files: ['scripts/**'],
      extends: ['@kmkzt/lib/node'],
    },
  ],
}
```
