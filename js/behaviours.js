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
