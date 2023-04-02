// If the D.TS file name is main.d.ts, add the code below.
/*
/// <reference path = "./main.d.ts"/>
>>> Triple-slash directive / Reference tag
*/

import _ from 'lodash'
// Module made of JavaScript requires a separate Type Declaration.
// lodash.d.ts

const str = 'the brown fox jumps over the lazy dog.'

console.log(_.camelCase(str))
console.log(_.snakeCase(str))
console.log(_.kebabCase(str)) // error