const Version = require('../src/Version');

var aVersion = new Version('1.3.3-r3');
//aVersion = 1.3.3.3
var bVersion = new Version([1,2,5,6]);
//bVersion = 1.2.5.6
var cVersion = new Version();
//cVersion = 0.0.0.0
var dVersion = new Version(aVersion);
//dVersion = 1.3.3.3

//1.3.3.3 === 1.3.3.3 -> true
dVersion.incrementMajor();
//dVersion = 2.0.0.0
console.log('{2,0,0,0}.toString(): ' + dVersion.toString());
//output: 2.0.0.0
cVersion.setMinor(1);
//cVersion = 0.1.0.0
console.log('{0,1,0,0}.toRString(): ' + cVersion.toRString());
//output = 0.1.0r0
dVersion.incrementRevision();
//dVersion = 2.0.0.1
console.log('{2.0.0.1}.toHyphenRString(): ' + dVersion.toHyphenRString());
//output = 2.0.0-r1
var major = bVersion.getMajor();
//major = 1
bVersion.setBuild(major);
//bVersion = 1.2.1.6
console.log('{1,2,1,6}.toString(\'M:m-B_R\'): ' + bVersion.toString('M:m-B_R'));
//output = 1:2-1_6
console.log('{1,2,1,6}.toString(\'M:m-milestone\'): ' + bVersion.toString('M.m-milestone'));
//output = 1.2-milestone
console.log('1.3.3.3 > 1.2.5.6: ' + aVersion.isGreater(bVersion));
//1.3.3.3 > 1.2.5.6 -> true
console.log('1.2.5.6 < 0.1.0.0: ' + bVersion.isLess(cVersion));
//1.2.5.6 < 0.1.0.0 -> false

aVersion.toString(1);
