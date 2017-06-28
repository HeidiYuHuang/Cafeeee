function widthChange() {
	if (window.innerWidth <= 656 && window.innerWidth > 416) {
		document.getElementById("header-subnav-dropdown").style.display = 'block';
	} else {
		document.getElementById("header-subnav-dropdown").style.display = 'none';
	}

	if (window.innerWidth <= 416) {
		document.getElementById("header-nav-icon").style.display = 'flex';
	} else {
		document.getElementById("header-nav-icon").style.display = 'none';
	}
}

function dropdownSubnav () {
	if (document.getElementById("header-subnav-dropdown").style.display == 'block') {
		document.getElementById("header-subnav-dropdown").style.display = 'none';
	} else {
		document.getElementById("header-subnav-dropdown").style.display = 'block';
	}
}

// login
function closeLogin() {
	document.getElementById('login').style.display='none';
}

function openLogin() {
	document.getElementById('login').style.display='block';
}

var account = document.getElementById('login');
window.onclick = function(event) {
    if (event.target == account) {
        account.style.display = "none";
    }
}

// signup
function closeSignup() {
	document.getElementById('signup').style.display='none';
}

function openSignup() {
	document.getElementById('signup').style.display='block';
}

var accountsign = document.getElementById('signup');
window.onclick = function(event) {
    if (event.target == accountsign) {
        account.style.display = "none";
    }
}

//cart drop down
// add to chart
function addToCart(btn) {
	var index = btn.value;

	var li = document.createElement("li");
	li.className = "cart-dropdown-card";
	var div = document.createElement("div");
 	div.className = "cart-dropdown-card-container";
  	var img = document.getElementsByName(index + "-img")[0];
	var cln = img.cloneNode(true);
	var div2 = document.createElement("div");
	div2.className = "cart-dropdown-card-content";
	var p1 = document.createElement("p");
	p1.innerHTML = document.getElementsByName(index + "-title")[0].innerHTML;
	var p2 = document.createElement("p");
	var radios = document.getElementsByName(index + "-size");
	var size;
	for(var i = 0; i < radios.length; i++){
		if(radios[i].checked){
			p2.innerHTML = "Size: " + radios[i].value;
		}
	}
	var p3 = document.createElement("p");
	p3.innerHTML = "Quantity: " + document.getElementsByName(index + "-quantity")[0].value;
	var p4 = document.createElement("p");
	p4.innerHTML = "Price: " + document.getElementsByName(index + "-price")[0].innerHTML;
	div2.appendChild(p1);
	div2.appendChild(p2);
	div2.appendChild(p3);
	div2.appendChild(p4);
	div.appendChild(cln);
	div.appendChild(div2);
	li.appendChild(div);
	document.getElementById("cart").appendChild(li);
	var span = document.createElement("SPAN");
	var txt = document.createTextNode("\u00D7");
	span.className = "close";
	span.appendChild(txt);
	li.appendChild(span);
	var close = document.getElementsByClassName("close");
	var i;
	for (i = 0; i < close.length; i++) {
		close[i].onclick = function() {
		  var cls = this.parentElement;
		  cls.style.display = "none";
		}
	}
}

function toggleCart() {
	document.getElementById("cart").classList.toggle("show");
}

function addCloseIcon() {
	var myNodelist = document.getElementsByClassName("cart-dropdown-card");
	var i;
	for (i = 0; i < myNodelist.length; i++) {
	  var span = document.createElement("SPAN");
	  var txt = document.createTextNode("\u00D7");
	  span.className = "close";
	  span.appendChild(txt);
	  myNodelist[i].appendChild(span);
	}
}
addCloseIcon();

function closeCartCard() {
	var close = document.getElementsByClassName("close");
	var i;
	for (i = 0; i < close.length; i++) {
	  close[i].onclick = function() {
	    var div = this.parentElement;
	    div.style.display = "none";
	  }
	}
}
closeCartCard();