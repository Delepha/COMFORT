function test() {
  class C extends Array {}

  var c = new C();
  return c.map(Boolean) instanceof C;
}

if (!test()) {
  test();
  test();
  test();
  throw new Error("Test failed");
  test();
}
