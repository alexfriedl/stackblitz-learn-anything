// Starts and resolves process01
// Continues process02 after finishing process01
async function sequentialAsync() {
  try {
    console.log("start process 01");
    await process01('resolved process 01')
    console.log("start process 02");
    await process02('resolved process 02')
  } catch (error) {
    console.error(error);
  }
}

// Should start and resolve process01 and process02 parallel
async function parallelAsync() {
  try {
    console.log("starts process 01 and 02");
    await Promise.all([process01('resolved process 01'), process02('resolved process 02')])
  } catch (error) {
    console.error(error);
  }
}

// Process 01 finishes in 2sec
const process01 = param => {
  return new Promise(resolve => {
    try {
      //throw new Error('error', error)
      console.log("await process 01");
      setTimeout(() => {
        resolve(param)
        console.log(param)
        console.log()
      }, 2000);
    } catch (error) {
      console.error("error", error)
    }
  })
};

// Process 02 finishes in 1sec
const process02 = param => {
  return new Promise(resolve => {
    console.log("await process 02");
    setTimeout(() => {
      resolve(param)
      console.log(param)
    }, 1000);
  })
}

// init parallel mode
parallelAsync();

// init sequential mode
//sequentialAsync();
