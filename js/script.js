console.log("SCRIPT JALAN");
console.log("Particles =", typeof particlesJS);

new Typed(".typing",{

    strings:[
        "UI/UX Designer",
        "Web Developer",
        "Data Analyst",
        "Digital Marketing"
    ],

    typeSpeed:70,

    backSpeed:50,

    loop:true

});
particlesJS("particles-js", {

  particles: {

    number: {

      value: 180,

      density: {

        enable: true,

        value_area: 1000

      }

    },

    color: {

      value: "#00d9ff"

    },

    shape: {

      type: "circle"

    },

    opacity: {

      value: 0.7,

      random: true

    },

    size: {

      value: 4,

      random: true

    },

    line_linked: {

      enable: true,

      distance: 200,

      color: "#00d9ff",

      opacity: 0.2,

      width: 1

    },

    move: {

      enable: true,

      speed: 2.5,

      direction: "none",

      random: true,

      straight: false,

      out_mode: "out",

      bounce: false

    }

  },

  interactivity: {

    detect_on: "canvas",

    events: {

      onhover: {

        enable: true,

        mode: "grab"

      },

      resize: true

    },

    modes: {

      grab: {

        distance: 200,

        line_linked: {

          opacity: 0.5

        }

      }

    }

  },

  retina_detect: true

});

const cursor =
document.querySelector(".cursor");

document.addEventListener("mousemove",(e)=>{

    cursor.style.left =
    e.clientX + "px";

    cursor.style.top =
    e.clientY + "px";

});

const topBtn = document.getElementById("topBtn");

topBtn.addEventListener("click", () => {

    console.log("TOMBOL DIKLIK");

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

document
.getElementById("topBtn")
.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

const sections =
document.querySelectorAll("section");

const navLinks =
document.querySelectorAll(".nav-links a");

window.addEventListener("scroll",()=>{

    let current = "";

    sections.forEach(section=>{

        const sectionTop =
        section.offsetTop - 150;

        if(window.scrollY >= sectionTop){

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link=>{

        link.classList.remove("active");

        if(
            link.getAttribute("href")
            === "#" + current
        ){

            link.classList.add("active");

        }

    });

});

const menuToggle =
document.querySelector(".menu-toggle");

const navMenu =
document.querySelector(".nav-links");

menuToggle.addEventListener("click", ()=>{

    navMenu.classList.toggle("active");

});

document
.querySelectorAll(".nav-links a")
.forEach(link=>{

    link.addEventListener("click",()=>{

        navMenu.classList.remove("active");

    });

});