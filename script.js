const tanyaSection = document.getElementById("tanya-section");
const johnSection = document.getElementById("john-section");

// when buttons are pressed, toggle sections from display block to display none
switchProfile = () => {
    if (johnSection.style.display === "none") {
        johnSection.style.display = "block";
        tanyaSection.style.display = "none";
    } else {
        johnSection.style.display = "none";
        tanyaSection.style.display = "block";
    }
}