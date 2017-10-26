const Version = require('../src/Version');
const assert = require('assert');

var a = new Version(1,1);
var b = new Version();
var c = new Version([1,2,3,4]);
var d = new Version('2.3.0r3');

console.log('Version a: ' + a.toString());
console.log('Version b: ' + b.toString());
console.log('Version c: ' + c.toString());
console.log('Version d: ' + d.toString());

describe('Version constructors', () => {
  it('Version a should not be null', () => {
    assert.notEqual(a, null);
  });
  it('Version a toString equal to "1.1.0.0"', () => {
    assert.equal(a, '1.1.0.0');
  });
  it('Version b should not be null', () => {
    assert.notEqual(b, null);
  });
  it('Version b toString equal to "0.0.0.0"', () => {
    assert.equal(b, '0.0.0.0');
  });
  it('Version c should not be null', () => {
    assert.notEqual(c, null);
  });
  it('Version c toString equal to "1.2.3.4"', () => {
    assert.equal(c, '1.2.3.4');
  });
  it('Version d should not be null', () => {
    assert.notEqual(d, null);
  });
  it('Version d toString equal to "2.3.0.3"', () => {
    assert.equal(d, '2.3.0.3');
  });
  /// EXCEPTIONS TESTING
  it('Version constructor argument [1,1,1,1,1] should throw an exception.', () => {
    assert.throws(() => new Version([1,1,1,1,1]), Error);
  });
  it('Version constructor argument [1,1,\'a\',1] should throw an exception.', () => {
    assert.throws(() => new Version([1,1,'a',1]), Error);
  });
  it('Version constructor argument [1,1,-1,1] should throw an exception.', () => {
    assert.throws(() => new Version([1,1,-1,1]), Error);
  });
  it('Version constructor argument [1,1,1.1,1] should throw an exception.', () => {
    assert.throws(() => new Version([1,1,1.1,1]), Error);
  });
  it('Version constructor arguments 1,1,-1 should throw an exception.', () => {
    assert.throws(() => new Version(1,1,-1), Error);
  });
  it('Version constructor arguments 1,1,1.1 should throw an exception.', () => {
    assert.throws(() => new Version(1,1,1.1), Error);
  });
  it('Version constructor arguments 1,1,1,\'a\' should throw an exception.', () => {
    assert.throws(() => new Version(1,1,1,'a'), Error);
  });
  it('Version constructor arguments \'1.3.r4\' should throw an exception.', () => {
    assert.throws(() => new Version('1.3.r4'), Error);
  });
  it('Version constructor arguments \'1.3.0.0r4\' should throw an exception.', () => {
    assert.throws(() => new Version('1.3.0.0r4'), Error);
  });
  it('Version constructor arguments \'1.-3r4\' should throw an exception.', () => {
    assert.throws(() => new Version('1.-3r4'), Error);
  });
  it('Version constructor arguments \'1.-3.0\' should throw an exception.', () => {
    assert.throws(() => new Version('1.-3.0'), Error);
  });
  it('Version constructor arguments \'1.3.0.0.0\' should throw an exception.', () => {
    assert.throws(() => new Version('1.3.0.0.0'), Error);
  });
});

describe('Version setters and getters', () => {
  it('Version a getMajor should be 1', () => {
    assert.equal(a.getMajor(), 1);
  });
  it('Version a major changed to 3 with setMajor, and toString should equal to "3.1.0.0"', () => {
    a.setMajor(3);
    assert.equal(a.toString(), '3.1.0.0');
  });
  it('Version d getRevision should be 3', () => {
    assert.equal(d.getRevision(), 3);
  });
  it('Version d revision changed to 0 with setRevision, and toString should equal to "2.3.0.0"', () => {
    d.setRevision(0);
    assert.equal(d.toString(), '2.3.0.0');
  });
  it('Version b getMinor should be 0', () => {
    assert.equal(b.getMinor(), 0);
  });
  it('Version b minor changed to 3 with setMinor, and toString should equal to "0.3.0.0"', () => {
    b.setMinor(3);
    assert.equal(b.toString(), '0.3.0.0');
  });
  it('Version d getBuild should be 0', () => {
    assert.equal(d.getBuild(), 0);
  });
  it('Version d build changed to 13 with setBuild, and toString should equal to "2.3.13.0"', () => {
    d.setBuild(13);
    assert.equal(d.toString(), '2.3.13.0');
  });
  /// EXCEPTIONS TESTING
  it('Version setMajor argument null should throw an exception.', () => {
    assert.throws(() => a.setMajor(), Error);
  });
  it('Version setMajor argument \'a\' should throw an exception.', () => {
    assert.throws(() => a.setMajor('a'), Error);
  });
  it('Version setMajor argument -1 should throw an exception.', () => {
    assert.throws(() => a.setMajor(-1), Error);
  });
  it('Version setMajor argument 1.1 should throw an exception.', () => {
    assert.throws(() => a.setMajor(1.1), Error);
  });
  it('Version setMinor argument null should throw an exception.', () => {
    assert.throws(() => a.setMinor(), Error);
  });
  it('Version setMinor argument \'a\' should throw an exception.', () => {
    assert.throws(() => a.setMinor('a'), Error);
  });
  it('Version setMinor argument -1 should throw an exception.', () => {
    assert.throws(() => a.setMinor(-1), Error);
  });
  it('Version setMinor argument 1.1 should throw an exception.', () => {
    assert.throws(() => a.setMinor(1.1), Error);
  });
  it('Version setBuild argument null should throw an exception.', () => {
    assert.throws(() => a.setBuild(), Error);
  });
  it('Version setBuild argument \'a\' should throw an exception.', () => {
    assert.throws(() => a.setBuild('a'), Error);
  });
  it('Version setBuild argument -1 should throw an exception.', () => {
    assert.throws(() => a.setBuild(-1), Error);
  });
  it('Version setBuild argument 1.1 should throw an exception.', () => {
    assert.throws(() => a.setBuild(1.1), Error);
  });
  it('Version setRevision argument null should throw an exception.', () => {
    assert.throws(() => a.setRevision(), Error);
  });
  it('Version setRevision argument \'a\' should throw an exception.', () => {
    assert.throws(() => a.setRevision('a'), Error);
  });
  it('Version setRevision argument -1 should throw an exception.', () => {
    assert.throws(() => a.setRevision(-1), Error);
  });
  it('Version setRevision argument 1.1 should throw an exception.', () => {
    assert.throws(() => a.setRevision(1.1), Error);
  });
});

describe('Version increments', () => {
  it('Version a incrementMajor, toString should be equal to 4.0.0.0', () => {
    a.incrementMajor();
    assert.equal(a.toString(), '4.0.0.0');
  });
  it('Version c incrementMinor, toString should be equal to 1.3.0.0', () => {
    c.incrementMinor();
    assert.equal(c.toString(), '1.3.0.0');
  });
  it('Version b incrementBuild, toString should be equal to 0.3.1.0', () => {
    b.incrementBuild();
    assert.equal(b.toString(), '0.3.1.0');
  });
  it('Version d incrementRevision, toString should be equal to 2.3.13.1', () => {
    d.incrementRevision();
    assert.equal(d.toString(), '2.3.13.1');
  });
});

describe('Version comparisons', () => {
  it('Version a isGreater than Version b should be true', () => {
    assert.equal(a.isGreater(b), true);
  });
  it('Version c isLess than Version b should be false', () => {
    assert.equal(c.isLess(b), false);
  });
  it('Version a isEqual to Version d should be false', () => {
    assert.equal(a.isEqual(d), false);
  });
  /// EXCEPTIONS TESTING
  it('Version isGreater argument null should throw an exception.', () => {
    assert.throws(() => a.isGreater(), Error);
  });
  it('Version isGreater argument \'1.1.1\' should throw an exception.', () => {
    assert.throws(() => a.isGreater('1.1.1.'), Error);
  });
  it('Version isGreater argument [1,1,1] should throw an exception.', () => {
    assert.throws(() => a.isGreater([1,1,1]), Error);
  });
  it('Version isGreater argument 1.2 should throw an exception.', () => {
    assert.throws(() => a.isGreater(1.2), Error);
  });
  it('Version isGreater argument 1 should throw an exception.', () => {
    assert.throws(() => a.isGreater(1), Error);
  });
  it('Version isLess argument null should throw an exception.', () => {
    assert.throws(() => a.isLess(), Error);
  });
  it('Version isLess argument \'1.1.1\' should throw an exception.', () => {
    assert.throws(() => a.isLess('1.1.1.'), Error);
  });
  it('Version isLess argument [1,1,1] should throw an exception.', () => {
    assert.throws(() => a.isLess([1,1,1]), Error);
  });
  it('Version isLess argument 1.2 should throw an exception.', () => {
    assert.throws(() => a.isLess(1.2), Error);
  });
  it('Version isLess argument 1 should throw an exception.', () => {
    assert.throws(() => a.isLess(1), Error);
  });
  it('Version isEqual argument null should throw an exception.', () => {
    assert.throws(() => a.isEqual(), Error);
  });
  it('Version isEqual argument \'1.1.1\' should throw an exception.', () => {
    assert.throws(() => a.isEqual('1.1.1.'), Error);
  });
  it('Version isEqual argument [1,1,1] should throw an exception.', () => {
    assert.throws(() => a.isEqual([1,1,1]), Error);
  });
  it('Version isEqual argument 1.2 should throw an exception.', () => {
    assert.throws(() => a.isEqual(1.2), Error);
  });
  it('Version isEqual argument 1 should throw an exception.', () => {
    assert.throws(() => a.isEqual(1), Error);
  });
});

describe('Convert from Version functions', () => {
  it('Version a toString should be "4.0.0.0"', () => {
    assert.equal(a.toString(), '4.0.0.0');
  });
  it('Version b toRString should be "0.3.1r0"', () => {
    assert.equal(b.toRString(), '0.3.1r0');
  });
  it('Version c toHyphenRString should be "1.3.0-r0"', () => {
    assert.equal(c.toHyphenRString(), '1.3.0-r0');
  });
  it('Version c toString("MrR") should be "1r0"', () => {
    assert.equal(c.toString('MrR'), '1r0');
  });
  it('Version c toString("M:m:B:R-test") should be "1:3:0:0-test"', () => {
    assert.equal(c.toString('M:m:B:R-test'), '1:3:0:0-test');
  });
  it('Version c toString("MMmmBBRR") should be "1M3m0B0R"', () => {
    assert.equal(c.toString('MMmmBBRR'), '1M3m0B0R');
  });
  it('Version c toString("") should be "1.3.0.0"', () => {
    assert.equal(c.toString(''), '1.3.0.0');
  });
  it('Version d toArray() should be [2,3,13,1]', () => {
    assert.deepEqual(d.toArray(), [2,3,13,1]);
  })
  /// EXCEPTIONS TESTING
  it('Version toString argument 1 should throw an exception.', () => {
    assert.throws(() => a.toString(1), Error);
  });
  it('Version toString argument [\'M\',\'m\'] should throw an exception.', () => {
    assert.throws(() => a.toString(['M', 'm']), Error);
  });
});
