// Testimonial data to be displayed
const testimonials = [
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

// Load first testimonial on page load
    loadData = () => {
    document.querySelector("#paragraph").innerHTML = testimonials[0].text;
    document.getElementById("name").innerHTML = testimonials[0].name;
    document.getElementById("title").innerHTML = testimonials[0].title;
    document.querySelector("#image").setAttribute("src", testimonials[0].image );
    i = testimonials[0].id;
    }

    

// On button press   
    switchProfile = (i) => {
    document.querySelector("#paragraph").innerHTML = testimonials[i].text;
    document.getElementById("name").innerHTML = testimonials[i].name;
    document.getElementById("title").innerHTML = testimonials[i].title;
    document.querySelector("#image").setAttribute("src", testimonials[i].image );
    }

    loadData();

    document.querySelector("#icon-next").addEventListener("click", function(){
        i--;
        if (i < 0) {
            i = testimonials.length-1;
        }
        switchProfile(i);
    });

    document.querySelector("#icon-prev").addEventListener("click", function(){
        i++;
        if (i > testimonials.lenth -1) {
        i = 0;
        }
        switchProfile(i);
    });


// OTHER STUFF I TRIED    

/*const tanyaSection = document.getElementById("tanya-section");
const johnSection = document.getElementById("john-section");
const prevButton = document.getElementById("icon-prev");
const nextButton = document.getElementById("icon-next");
*/

/*
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

toggleVisible = () => {
    if (this.parentElement.style.display == "block" || "flex") {
        this.parentElement.style.display.add("none");
    } else {
        this.parentElement.classList.add(".m-fadeOut");
    }
}
*/