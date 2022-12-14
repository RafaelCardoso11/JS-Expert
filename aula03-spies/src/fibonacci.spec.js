const Fibonacci = require("./fibonacci");
const sinon = require("sinon");

const assert = require("assert");

// Fibonacci: o próximo valor correspondente a soma dos dois anteriores
// dado 3
// 0, 1, 1
// 0, 1, 1, 2, 3
(async () => {
  {
    const fibonacci = new Fibonacci();
    const spy = sinon.spy(fibonacci, fibonacci.execute.name);
    fibonacci.execute(3);

    const expectedCallCount = 4;

    console.log("callCount:", spy.callCount);

    assert.deepStrictEqual(spy.callCount, expectedCallCount);
  }
})();
