var flag = true;

function imageLoad() {
  var i;

  if(flag){
    for(i = 1; i < 10; i++){

      var elem = document.createElement("img");
      var path = "assets/images/des" + i + "/" + Math.round((Math.random()*5)+1) + ".jpg"

      elem.src = path;
      elem.setAttribute("height", "100%");
      elem.setAttribute("width", "100%");

      document.getElementById("grid" + i).innerHTML = "";
      document.getElementById("grid" + i).appendChild(elem);
    }
  }
  setTimeout('imageLoad()',1800);
}

function buttonClick(){
  var buttonElem = document.getElementById("pauseStartButton");

  if(flag){
    flag = false;
    buttonElem.innerHTML = 'Start';
  }
  else {
    flag = true;
    buttonElem.innerHTML = 'Pause';
  }
}
