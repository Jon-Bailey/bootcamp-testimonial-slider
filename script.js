const tanyaSection = document.getElementById("tanya-section");
const johnSection = document.getElementById("john-section");

/*const testimonials = [
    {
        id:0,
        name:"John Tarkpor",
        text:' \" If you want to lay the best foundation possible I\'d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. \" ',
        image:"images/image-john.jpg",
        title:"Junior Front-end Developer"
    },
    {
        id:1,
        name:"Tanya Sinclair",
        text:' \" I\'ve been interested in coding for a while but never taken the jump, until now. I couldn\'t recommend this course enough. I\'m now in the job of my dreams and so excited about the future. \" ',
        image:"images/image-tanya.jpg",
        title:"UX Engineer"
    }];

    document.querySelector("#paragraph").innerHTML = testimonials[0].text;
*/

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

/*
toggleVisible = () => {
    if (this.parentElement.style.visibility === "visible") {
        this.parentElement.classList.add(".m-fadeIn");
    } else {
        this.parentElement.classList.add(".m-fadeOut");
    }
}
*/