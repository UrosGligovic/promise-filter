class PromiseArrayHandler {

  constructor(goal, whenDone) {
    this.goal = goal.length;
    this.current = 0;
    this.onComplete = whenDone;
    this.successful = 0;
    this.failed = 0;
    this.results = [];
    this.errors = []
  }

  handle() {
    promises.forEach(x => {
      x.then(x => {
        this.successful++;
        this.results.push(x);
      })
        .catch(error => {
          this.failed++;
          this.errors.push(error)
        })
        .then(x => {
          this.increment();
          return x;
        })
    });
  }

  increment() {
    this.current++;
    if (this.goal <= this.current) {
      this.onComplete(this.successful, this.failed);
    }
  }

  addResult(result) {
    this.results.push(result);
  }

  then(userFunction) {

    this.endFunction = userFunction;

  }

}

export async function handlePromises(promises) {
  let promiseTracker = new PromiseArrayHandler(promises);
  promiseTracker.handle();

  promiseTracker.onComplete = async (ok, nok) => {
    promiseTracker.endFunction({
      successful: promiseTracker.successful,
      results: promiseTracker.results,
      failed: promiseTracker.failed,
      errors: promiseTracker.errors
    });
  };
  return promiseTracker;

}




