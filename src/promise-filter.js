class PromiseArrayHandler {

  constructor(goal, whenDone) {
    this.goal = goal.length;
    this.current = 0;
    this.onComplete = whenDone;
    this.successful = 0;
    this.failed = 0;
    this.results = [];
    this.errors = []
    this.promises = goal;
  }

  handle() {
    this.promises.forEach(x => {
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

module.exports = async (promises) => {
  let promiseTracker = new PromiseArrayHandler(promises);
  promiseTracker.handle();

  promiseTracker.onComplete = async (ok, nok) => {
    promiseTracker.endFunction({
      successfulCount: promiseTracker.successful,
      results: promiseTracker.results,
      failedCount: promiseTracker.failed,
      errors: promiseTracker.errors
    });
  };
  return promiseTracker;

}




