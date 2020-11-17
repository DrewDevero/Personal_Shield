const SHIELD = document.getElementById("shieldSection");
const POINT1 = document.getElementById("pointOne");
const POINT2 = document.getElementById("pointTwo");
const POINT3 = document.getElementById("pointThree");
const POINT4 = document.getElementById("pointFour");
const POINT5 = document.getElementById("pointFive");

(function phase() {
        SHIELD.style.opacity = "1";
})();

// sizeShift function - makes each word located around the shield polygon re-size and change color, one at a time, in a clockwise sequence
function pointAnimation(point) { 
    point.animate([{fontSize: "inherit", easing: "ease-in-out"},{fontSize: "3rem", color: "blue", easing: "ease-in-out"},{fontSize: "inherit", easing: "ease-in-out"}], 2000)
}
(function sizeShift() {
    setTimeout(() => pointAnimation(POINT1), 2000);
    setTimeout(() => pointAnimation(POINT2), 4000);
    setTimeout(() => pointAnimation(POINT3), 6000);
    setTimeout(() => pointAnimation(POINT4), 8000);
    setTimeout(() => pointAnimation(POINT5), 10000);
    setTimeout(() => {setInterval(() => pointAnimation(POINT1), 10000)}, 2000);
    setTimeout(() => {setInterval(() => pointAnimation(POINT2), 10000)}, 4000);
    setTimeout(() => {setInterval(() => pointAnimation(POINT3), 10000)}, 6000);
    setTimeout(() => {setInterval(() => pointAnimation(POINT4), 10000)}, 8000);
    setTimeout(() => {setInterval(() => pointAnimation(POINT1), 10000)}, 10000);
})();