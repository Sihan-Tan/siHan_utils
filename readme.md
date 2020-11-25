# Library of tools commonly used in work

[![Build Status](https://travis-ci.org/Sihan-Tan/siHan_utils.svg?branch=master)](https://travis-ci.org/github/Sihan-Tan/siHan_utils)
[![Coverage Status](https://coveralls.io/repos/github/Sihan-Tan/siHan_utils/badge.svg)](https://coveralls.io/github/Sihan-Tan/siHan_utils)
[![Node Version](https://img.shields.io/node/v/sihan-utils)](https://img.shields.io/node/v/sihan-utils)
[![Total Download](https://img.shields.io/npm/dt/sihan-utils)](https://npmcharts.com/compare/sihan-utils)
[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](https://github.com/Sihan-Tan/siHan_utils/blob/master/LICENSE)

# Overview

This utils can help you do something such as formatDate, produceRadom and so on...

# Installation

`npm install --save sihan-utils`

# document

https://sihan-tan.github.io/siHan_utils/

or

https://github.com/Sihan-Tan/siHan_utils/blob/master/docs/index.md

# Example

## 在 webpack 中使用

```javascript
import { randomNumber } from "sihan-utils";
console.log(randomNumber(1, 100)); // a number between 1 and 100
```

## 在 node 中使用

```javascript
const { randomNumber } = require("sihan-utils");
console.log(randomNumber(1, 100)); // a number between 1 and 100
```

# Changelog

https://github.com/Sihan-Tan/siHan_utils/blob/master/changelog.md

# Last

- 增加了 amd, esm, iife, umd 的打包输出
- 移除 cookie 和 dom 相关方法

# Warning

移除了 cookie 和 dom 相关的方法

https://github.com/Sihan-Tan/siHan_utils/blob/master/remove.md
