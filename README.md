### promise-list-filter
Module intended for scenarios where not all promises from a list of promises must be resolved. Executes list of promises and returns object containing both resolved and rejected responses in two separate lists.

### Install
`npm install promise-list-filter`

### Usage

```
var filterPromises = require("promise-list-filter");

let listOfPromises = []
for (let i = 0; i < 21; i++) {
  listOfPromises.push(functionThatReturnsAPromise(i));
}

filterPromises(listOfPromises)
.then(x=>yourFunctionThatWillHandleTheResponse(x))
.catch(err => console.error(err));  
```

### Response Object Structure

```
{ successfulCount: $numberOfResolvedPromises,
  results: $ListOfResolvedValues,
  failedCount: $numberOfRejectedPromises,
  errors:  $ListOfRejections }`

```
