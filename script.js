
function add() {
  var x = document.getElementById("form");
  var tr = document.getElementById("data");

  for ( var i = 0; i < x.length; i++) {
    var td = document.createElement("td");
    td.innerHTML += x.elements[i].value;
    tr.appendChild(td);
  }
}
