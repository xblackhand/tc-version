const Version = require('tc-version');

var a = new Version("1.1.1-r");

console.log(a.toString("M.m.B.R-milestone"));
