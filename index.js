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
