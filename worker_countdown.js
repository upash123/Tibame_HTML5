onmessage = function (e) {
    let number = e.data;//10
    setInterval(function () {
      number--;
      postMessage(number);
    }, 1000);
  };