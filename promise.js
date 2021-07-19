function printString(str) {
  console.log(str);
  return new Promise((resolve, reject) => {
    resolve("Promise resolved");
    // reject("Promise rejected");
  });
}

function printAll() {
  printString("A")
    .then((val) => {
      // console.log(val);
      printString("B")
    })
    .then(() => printString("C"))
    .catch((err) => console.error(err))
    .finally(() => console.log("Promise Exited"));
}

printAll();