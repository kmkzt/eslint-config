module.exports = {
  extends: ['./lib/javascript.js'],
  overrides: [
    {
      files: ['*.tsx', '*.jsx'],
      extends: ['./lib/react.js'],
    },
    {
      files: ['*.ts', '*.tsx'],
      extends: ['./lib/typescript.js'],
    },
    {
      files: ['*.test.*', '*.spec.*'],
      extends: ['./lib/jest.js'],
    },
  ],
}
