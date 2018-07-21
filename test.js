const promiseFilter = require("./index.js");
const sleep = require('sleep-promise');

const callApi = (number) => {
  return sleep(Math.random() * 10).then(() => {
    if (number % 2 == 0) {
      return number
     } else {
       throw "random Error"
     }

  })
}

let promises = []
for (let i = 0; i < 21; i++) {
  promises.push(callApi(i));
}

promiseFilter.filterPromises(promises)
.then(x=>console.log(x))
.catch(err => console.error(err));