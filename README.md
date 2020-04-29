# my-ts-mathlib

A demo of created lodash type utility library using TypeScript

# todos

- [x] Basic Code in src folder
- [x] UMD build with browser with direct script tag is working.
- [ ] import { calSquareArea , calCircleArea, } from 'my-ts-mathlib' - Should work in demo code
- [ ] import { calSquareArea } from 'my-ts-mathlib/esm/calSquareArea' - should work in demo code.
- [ ] If somebody only use "calSquareArea" then it should not include source code of calCircleArea
- [ ] There should be demo of ESM modules in browser.
- [ ] All sort of target should work, ESM, Commonjs, AMD, UMD etc.
- [ ] Type definition should be included in the project dist.
- [ ] If somebody use calSquareArea('2', '4'), it should give ts compiler error. Type definition should work while using.
- [ ] publish over npm
- [ ] use the package it in code-sandbox, CRA other places.
- [ ] library should work in Node, Browser and all sort of environments.
- [ ] CircleCI build should run test cases.
- [ ] when somebody generate pull request for adding new function, pull request should show test results in pull request.
- [ ] Auto generate documentation like lodash.
