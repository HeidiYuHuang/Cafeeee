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
