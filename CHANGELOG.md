# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Added

- `newElemFromArray()` → passing an array into `newElem()` now calls this method. 
- `newElemFromString()` → passing a string into `newElem()` now calls this method.
- `setDefaultTag()` → `newElemFromString()` uses this tag.
- `newElemDl()` → creates a description list (`<dl><dt>Term</dt><dd>Definition</dd><dl>`)

### Changed

- `newElem()` can accept strings, arrays, and objects as "options" parameters.
- `newElem()` options → accepts `className` and `classList` as aliases for `class`.
- `newElem()` options → accepts `attribute` and `attr` as aliases for `attributes`.
- `newElem()` options → accepts `eventListeners` as alias for `listeners`.
- `newElem()` options → accepts `styles` as alias for `style`.
- `newElem()` options → `attribute` accepts either an array or an object as parameter.
- `newElem()` options → `listeners` accepts either an array or an object as parameter.
- `newElem()` options → `class` accepts either an array or a string as parameter.

- `newElemList()` now accepts an "options" parameter: `{ isOrdered, isNav }`.

### Removed

- `newElemNav()` method → The options parameter for `newElemList()` now has the `isNav` option.

## [0.2.2] - 2024-05-14

Initial release (last version before CHANGELOG was added.)