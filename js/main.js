function show() {
    document.getElementById("side-menu").classList.toggle("show");
}

function sendEmail() {
    var nume=document.getElementById("nume").value;
    var mesaj=document.getElementById("mesaj").value;
    window.open('mailto:frunza.elena@edu.md?subject=' +   nume +  '&body=' + mesaj);
  }

  function data() {
    var date = new Date();
    var an, luna, zi;
    var text;

    zi = date.getDate();
    luna = date.getMonth() + 1;
    an = date.getFullYear();

    text = zi + "-" + luna + "-" + an;
    alert(text);

    document.getElementById("text-data").innerHTML = "Cîrnățenii Noi,  " + text;
}



function mobileMenu() {
    var x = document.getElementById("navbar");
    if (x.className === "nav") {
        x.className += " mobile";
    } else {
        x.className = "nav";
    }
}
