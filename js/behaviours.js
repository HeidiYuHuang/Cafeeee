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
