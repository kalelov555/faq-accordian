var qs = document.querySelectorAll(".questions");

for (var i = 0; i < qs.length; i++) {
  qs[i].addEventListener("mouseenter", function() {
    mouseEnter(this);

  });
}

for (var i = 0; i < qs.length; i++) {
  qs[i].addEventListener("mouseleave", function() {
    mouseLeave(this);
  });
}

function mouseEnter(text) {
  text.style.color = "hsl(14, 88%, 65%)";
}

function mouseLeave(text) {
  text.style.color = "hsl(240, 6%, 50%)";
}




var part = document.querySelectorAll(".partition");
var icons = document.querySelectorAll(".fas")
for (var i = 0; i<part.length; i++) {
  part[i].addEventListener("click", function() {
    //var icons = document.querySelectorAll("fas");
    for(var i=0; i<part.length; i++){
    if(part[i]===this) rotateIcon(icons[i]);
  }
  });
}

function rotateIcon(icons) {
  if (icons.classList.contains("rotate")) {
    icons.classList.remove("rotate");
  } else
    icons.classList.add("rotate");

}


function showText(x) {
  var aaa = document.querySelectorAll(".questions");
  for(var i=0; i<aaa.length; i++) {
    if(aaa[i]===x) {
      var k = document.querySelectorAll(".answers")[i];
      if (k.style.display !== "block") {
        k.style.display = "block";
    }
    else {
        k.style.display = "none";
    }

    }
  }
}
