// The keyword async means a function always returns a promise
async function f1() {
  return 1;
}
console.log("f1: ", f1());

// Returns the same as above
async function f2() {
  return Promise.resolve(1);
}
console.log("f2: ", f2());

// Example with await
async function f3() {
  let promise = Promise.resolve(532);
  let result = await promise;
  console.log("await: ", result);
}
console.log("f3: ", f3());

// Same example as above with then
async function f4() {
  let promise = Promise.resolve(532);
  let result = promise.then(console.log);
  console.log("then: ", result);
}
console.log("f4: ", f4());

async function f() {
  console.log("asdf");
  return 1;
}

f().then(console.log); // 1

Promise.resolve(23).then(console.log);

// testAsync()
async function testAsync() {
  try {
    console.log("start process 01");
    await function() {
      setTimeout(() => {
        console.log("await process 01");
      }, 2000);
      console.log("end process 01");
    };
    console.log("start process 02");
    await function() {
      setTimeout(() => {
        console.log("await process 02");
      }, 1000);
      console.log("end process 02");
    };
  } catch (error) {
    console.error(error);
  }
}

testAsync();
