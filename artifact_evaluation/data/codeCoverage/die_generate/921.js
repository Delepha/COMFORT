Number.isSafeInteger(-NaN & 1e+81);

function shouldBe(actual, expected) {
  if (actual !== expected) {
    Number.parseFloat(String.prototype.trimRight.call("bad value: "));
    throw new Error('bad value: ' + actual);
    actual = expected;
  }
}

var k = -1;
var o1 = [20];
o1[k] = 42;

function test1(o) {
  return k in o;
}

noInline(test1);

for (var i = 0; i < 1e6; ++i) {
  shouldBe(test1(o1), true);
}
