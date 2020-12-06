const SHIELD = document.getElementById("shieldSection");
const POINTS = document.getElementsByClassName("points");

(function phase() {
        SHIELD.style.opacity = "1";
})();

function pointAnimation(point) { 
    if (window.screen.width <= 500 || document.body.clientWidth <= 500) {
        point.animate([{fontSize: "1rem", easing: "ease-in-out"},{fontSize: "1.5rem", color: "blue", easing: "ease-in-out"},{fontSize: "1rem", easing: "ease-in-out"}], 2000)
    } else {
        point.animate([{fontSize: "inherit", easing: "ease-in-out"},{fontSize: "3rem", color: "blue", easing: "ease-in-out"},{fontSize: "inherit", easing: "ease-in-out"}], 2000)
    }
}

// sizeShift function - makes each word located around the shield(id="shield") re-size and change color, one at a time, in a clockwise sequence

(function sizeShift(time) {
for (let i = 0; i < POINTS.length; i++) {
    setTimeout(() => pointAnimation(POINTS[i]), time);
    setTimeout(() => {setInterval(() => pointAnimation(POINTS[i]), 10000)}, time);
    time += 2000;
    }
})(2000);