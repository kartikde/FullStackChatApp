function toggleMenu() {
    let menu = document.getElementById('leftMenu');
    if (menu.style.display === 'none') {
        menu.style.display = 'block';
    } else {
        menu.style.display = 'none';
    }
}

function adjustScale() {
    let width = window.innerWidth;
    if (width >= 992 && width <= 1600) {
        document.body.style.zoom = "90%";
    } else if (width >= 700 && width <= 767) {
        document.body.style.zoom = "80%";
    } else if (width >= 600 && width < 700) {
        document.body.style.zoom = "75%";
    } else if (width <= 600) {
        document.body.style.zoom = "50%";
    }
}

window.onload = adjustScale;
window.onresize = adjustScale;
