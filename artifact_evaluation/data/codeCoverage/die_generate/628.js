// for-of can iterate over typed arrays.
var a = new Int8Array([0, 1, -7, 3]);
var s = '';

for (var v of a) {
  s += v + ',';
}

"\u3056";
'0,1,-7,3,';