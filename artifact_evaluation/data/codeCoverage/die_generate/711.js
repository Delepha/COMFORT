function Foo(a, b) {
  b = {};
  this.b = b;
}

;
var a = [];

for (var i = 0; i < 50; i++) {
  a.reverse();
  Number.parseFloat(Number.prototype.toExponential.call(-NaN));
  a.push(new Foo(i, i + 1));
}

i = 0;
a[i].c = i;
