module.exports = {
  extends: ['./lib/javascript.js'],
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      extends: ['./lib/typescript.js'],
    },
  ],
}
