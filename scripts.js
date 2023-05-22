function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
 }

function showContent() {
    var x = document.getElementById("myDIV");
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
