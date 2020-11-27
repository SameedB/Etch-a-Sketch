const container = document.getElementById("container");

function makeRows(rows, cols) {
  container.style.setProperty('--grid-rows', rows);
  container.style.setProperty('--grid-cols', cols);
  for (c = 0; c < (rows * cols); c++) {
    let cell = document.createElement("div");
    var divCount = 0;
    divCount+=1;
    cell.classList.add("grid-item");
    container.appendChild(cell);
  };
  console.log(divCount);
  sketch();
};


function gridSize(){
  $('#container').empty();
  
  var gridDim = window.prompt("Enter Grid Dimensions");
  makeRows(gridDim, gridDim);
}

makeRows(16, 16);

function sketch(){
  var divs = document.querySelectorAll(".grid-item");
for(var i = 0; i < divs.length; i += 1){
  divs[i].addEventListener('mouseenter', function (e) {
      e.target.style.background = "yellow";
  });
 }
}


function clearButton(){
  var divss = document.querySelectorAll(".grid-item");
  for(var j = 0; j < divss.length; j+= 1){
    divss[j].style.background = "purple"
  }
}


