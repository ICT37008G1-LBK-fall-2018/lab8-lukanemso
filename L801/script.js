var d = new Date();
var n = d.getMinutes();

if (n % 2 == 0) {
  function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));

  }
}

else {
    alert("shecdoma");
}

delay(1000).then(() => alert('runs after 10 seconds'));
// merge ("123") ("456")