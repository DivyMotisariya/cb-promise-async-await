function printString(str) {
  console.log(str);
  return new Promise((resolve, reject) => {
    resolve("Promise resolved");
    // reject("Promise rejected");
  });
}

async function printAll() {
  try {
    let res = await printString("A");
    console.log(res);
    res = await printString("B");
    console.log(res);
    res = await printString("C");
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}

printAll();