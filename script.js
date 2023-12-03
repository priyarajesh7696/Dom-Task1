
function add() {
  var x = document.getElementById("form");
  var tbody = document.getElementById("tbody");
  var tr = document.createElement("tr");
  for ( var i = 0; i < x.length; i++) {
    
    var td = document.createElement("td");
    console.log(x.elements[i].value);
    td.innerHTML += x.elements[i].value;
    tr.appendChild(td);
    
  }
  tbody.appendChild(tr);
  x.reset();
}


