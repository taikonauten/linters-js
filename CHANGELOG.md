# Changelog

## [1.2.0] - 2026-10-30

### Added

- Flat config support for ESLint 9+ (`eslint/flat.js`), carrying the same ruleset as the legacy `eslint/index.js` export. Additive only — `eslint/index.js` is unchanged, so existing `.eslintrc`-based projects keep working without any changes.

### Fixed

- README: replaced the deprecated `babel-eslint` dependency with `@babel/eslint-parser`.
