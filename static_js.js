on_key_down = function(event) {
  var pc = document.getElementById("postalcode").value;
  document.getElementById("street").value = "";
  document.getElementById("city").value = "";
  
  console.log(pc);
  console.log(pd[pc][0] + " " + pd[pc][1]);

  document.getElementById("street").value = pd[pc][0];
  document.getElementById("city").value = pd[pc][1];
}

document.onkeyup = on_key_down;

  document.getElementById("postalcode").focus();
