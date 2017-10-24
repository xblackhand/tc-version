const Version = require('../src/Version');

var a = new Version('1.1.1-r1');

console.log(a.toHyphenRString(true));
