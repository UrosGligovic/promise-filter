### promise-filter
Module intended for scenarios where not all promises from a list of promises must be resolved. Executes list of promises and returns object containing both resolved and rejected responses in two separate lists.

### Install
`npm install promise-filter`

### Usage

```
var filterPromises= require("promise-filter");

let promises = []
for (let i = 0; i < 21; i++) {
  promises.push(functionThatReturnsAPromise(i));
}

filterPromises(promises)
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
