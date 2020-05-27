var flag = true;
var j = 1
var j2 = Math.round((Math.random()*5)+1);

function imageLoad() {
  var i;

  if(flag){
    if(j == 15){
      j2 = (j2%6) + 1;
      j = j2;

      for(i = 1; i < 10; i++){

        var elem = document.createElement("img");
        var path = "images/des" + i + "/" + j + ".jpg"

        elem.src = path;
        elem.setAttribute("height", "100%");
        elem.setAttribute("width", "100%");

        document.getElementById("grid" + i).innerHTML = "";
        document.getElementById("grid" + i).appendChild(elem);
      }
    }

    else {
      for(i = 1; i < 10; i++){

        var elem = document.createElement("img");
        var path = "images/des" + i + "/" + Math.round((Math.random()*5)+1) + ".jpg"

        elem.src = path;
        elem.setAttribute("height", "100%");
        elem.setAttribute("width", "100%");

        document.getElementById("grid" + i).innerHTML = "";
        document.getElementById("grid" + i).appendChild(elem);
      }
    }
  }

  j++;
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
