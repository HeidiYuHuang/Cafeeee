function openSubmenu(event, subtitle, subcontent) {
	var i, submenutitle, submenucontent, submenulinks;
    submenutitle = document.getElementsByClassName("content-submenutitle");
    for (i = 0; i < submenutitle.length; i++) {
        submenutitle[i].style.display = "none";
    }
	submenucontent = document.getElementsByClassName("content-submenucontent");
	for (i = 0; i < submenucontent.length; i++) {
        submenucontent[i].style.display = "none";
    }
    submenulinks = document.getElementsByClassName("content-submenulinks");
    for (i = 0; i < submenulinks.length; i++) {
        submenulinks[i].className = submenulinks[i].className.replace(" active", "");
    }
    document.getElementById(subtitle).style.display = "block";
    document.getElementById(subcontent).style.display = "block";
    event.currentTarget.className += " active";
}
document.getElementById("content-submenu-default").click();

// add to chart
// function addToCart() {
//   var li = document.createElement("li");
//   var inputValue = document.getElementById("product").value;
//   var t = document.createTextNode(inputValue);
//   li.appendChild(t);
//   if (inputValue === '') {
//     alert("You must write something!");
//   } else {
//     document.getElementById("cart").appendChild(li);
//   }
//   document.getElementById("product").value = "";

//   var span = document.createElement("SPAN");
//   var txt = document.createTextNode("\u00D7");
//   span.className = "close";
//   span.appendChild(txt);
//   li.appendChild(span);

//   for (i = 0; i < close.length; i++) {
//     close[i].onclick = function() {
//       var div = this.parentElement;
//       div.style.display = "none";
//     }
//   }
// }