/* Open */
function openNav() {
    document.getElementById('drawer').style.width = "100%";
    document.querySelector('.justify').style.display = "none";
}

/* Close */
function closeNav() {
    document.getElementById("drawer").style.width = "0%";
    document.querySelector('.justify').style.display = "block";
}