function printString(str, cb) {
  console.log(str);
  cb();
}

function printAll() {
  printString("A", () => {
    printString("B", () => {
      printString("C", () => {});
    });
  });
}

printAll();