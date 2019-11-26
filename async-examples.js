// The keyword async means a function always returns a promise
// And it allows to use await in it - see example3
async function example1() {
  return 1;
}

// Returns the same as above
async function example2() {
  return Promise.resolve(1);
}

// Example with await
async function example3() {
  let promise = Promise.resolve(333);
  let result = await promise;
  console.log("await: ", result);
}

// Same example as above with then
async function example4() {
  let promise = Promise.resolve(444);
  let result = promise.then(console.log);
  console.log("then: ", result);
}

async function example5() {
  console.log("asdf");
  return 1;
}

console.log("example1: ", example1());
console.log("example2: ", example2());
console.log("example3: ", example3());
console.log("example4: ", example4());

example5().then(console.log); // 1

Promise.resolve(23).then(console.log);
