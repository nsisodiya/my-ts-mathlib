# my-ts-mathlib

This is a boilerplate for small JavaScript utility library (like lodash) with typescript and microbundle.
example folder has various demo.

# Tasks

Src

- [x] Basic Code in src folder

Publish

- [x] publish over npm
- [x] Type definition should be included in the project dist.
- [x] src, example and other folder should not be part of npm package.

UMD

- [x] UMD build with browser with direct script tag is working.

Browser env with Parcel + TypeScript

- [x] import { calRectangleArea } from 'my-ts-mathlib' should work.
- [ ] import calRectangleArea from 'my-ts-mathlib/es/calRectangleArea' should work.
- [x] Vscode should show error if we send incorrect data to function.
- [x] npm run start should fail on providing incorrect type.
- [x] npm run build should fail on providing incorrect type.
- [ ] calCircleArea should not be included in bundle

Browser env with CRA + TypeScript

- [x] import { calRectangleArea } from 'my-ts-mathlib' should work.
- [ ] import calRectangleArea from 'my-ts-mathlib/es/calRectangleArea' should work.
- [x] Vscode should show error if we send incorrect data to function.
- [x] npm run start should fail on providing incorrect type.
- [x] npm run build should fail on providing incorrect type.
- [x] calCircleArea should not be included in bundle

ES Module

- [x] working demo for Script type="module"
- [x] import { calSquareArea } from './node_modules/my-ts-mathlib/dist/index.module.js'; should be working
- [ ] import calSquareArea from './node_modules/my-ts-mathlib/dist/es/calSquareArea.js'; should be working

CommonJS - Node

- [x] var { calRectangleArea } = require('my-ts-mathlib') should work
- [ ] var calRectangleArea = require('my-ts-mathlib/es/calRectangleArea') should work

Node - TypeScript

- [x] import { calRectangleArea } from 'my-ts-mathlib' should work.
- [ ] import calRectangleArea from 'my-ts-mathlib/es/calRectangleArea' should work.
- [x] Vscode should show error if we send incorrect data to function.
- [x] npm run start should fail on providing incorrect type.

CodeSandbox Demo

- [ ] use the package it in code-sandbox

CRA TypeScript App

- [ ] package should work in CRA TypeScript App

Test Cases

- [ ] 100% CodeCoverage
- [ ] CircleCI build should run test cases.

Pull Request

- [ ] When somebody generate pull request, pull request should show test results.

Documentation over gh-pages

- [ ] Auto generate documentation like lodash.
