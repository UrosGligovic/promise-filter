const filterPromises = require("../src/promise-filter.js");
const fetch = require("node-fetch");
const sleep = require('sleep-promise');

let callApi = (number) => fetch('https://ugligovic.com/apiClientTest.php', {
  method: 'POST',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'numHeader': number
  },
  body: JSON.stringify({
    num: number
  })
}).then((response) => response.json());

// const callApi = (number) => {
//   return sleep(Math.random() * 10).then(() => {
//     if (number % 2 == 0) {
//       return number
//      } else {
//        throw "EXCEPTION"
//      }

//   })
// }

let promises = []
for (let i = 0; i < 2; i++) {
  promises.push(callApi(i));
}

filterPromises(promises)
//then(x=>x.results)
//.then(x=>x.map(x=>x.Headers))
.then(x=>console.log(x))
.catch(err => console.error(err));