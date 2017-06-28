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
