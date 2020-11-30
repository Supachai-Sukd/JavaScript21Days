(() => {
  // เริ่มเขียนโค้ด

  // 1. How Asynchronous code works in JavaScript
  // function simulateAsyncAPI (text, timeout) {
  //   setTimeout(() => console.log(text), timeout);
  // }
  // simulateAsyncAPI('A', 1000)
  // simulateAsyncAPI('B', 500)
  // simulateAsyncAPI('C', 100)

  // 2. Callback
  function simulateAsyncAPI (text, timeout, callback) {
    setTimeout(() => console.log(text), timeout);
  }
  // 3. Promise
  // 4. Async/Await
})();
