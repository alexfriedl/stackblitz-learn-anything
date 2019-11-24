var initialPromiseCount = 0;

// Wir erstellen einen Button
// Button triggered Promise
var button = document.getElementById("action");
button.addEventListener("click", function() {
  testPromise();
});

function testPromise() {
  // Wir loggen einen Counter im DOM
  var promiseCount = ++initialPromiseCount;
  var log = document.getElementById("log");

  // PROMISE STARTED (1)
  // Wir erstellen ein Promise Objekt
  var promise1 = new Promise(
    // Die Resolver-Funktion kann den Promise auflösen oder verwerfen
    function(resolve, reject) {
      log.insertAdjacentHTML(
        "beforeend",
        promiseCount +
          ") PROMISE STARTED (1) / <small>Async code started</small><br/>"
      );
      // Asynchron
      setTimeout(function() {
        // Wir erfüllen das Promise und übergeben das Ergebnis
        // resolve(promiseCount)
        // then(result)
        resolve(promiseCount);
      }, Math.random() * 1500);
    }
  );

  // PROMISE FULFILLED (3)
  promise1.then(function(result) {
    log.insertAdjacentHTML(
      "beforeend",
      result +
        ") PROMISE FULFILLED (3) / <small>Async code terminated</small><br/>"
    );
  });

  // PROMISE MADE (2)
  log.insertAdjacentHTML(
    "beforeend",
    promiseCount +
      ") PROMISE MADE (2) / <small>Sync code terminated</small><br/>"
  );
}
