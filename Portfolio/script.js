// ================= TYPING EFFECT =================

const typingText = document.getElementById("typingText");

const roles = [
    "Frontend Developer",
    "Web Developer",
    "JavaScript Developer",
    "React Developer"
];

let roleIndex = 0;
let charIndex = 0;
let deleting = false;


function typeEffect() {

    const currentRole = roles[roleIndex];

    if (!deleting) {

        typingText.textContent =
            currentRole.substring(0, charIndex + 1);

        charIndex++;

        if (charIndex === currentRole.length) {

            deleting = true;

            setTimeout(typeEffect, 1500);

            return;
        }

    } else {

        typingText.textContent =
            currentRole.substring(0, charIndex - 1);

        charIndex--;

        if (charIndex === 0) {

            deleting = false;

            roleIndex++;

            if (roleIndex === roles.length) {
                roleIndex = 0;
            }

        }
    }

    setTimeout(
        typeEffect,
        deleting ? 70 : 120
    );
}

typeEffect();


// ================= DYNAMIC PROJECTS =================

// const projects = [

//     {
//         title: "Restaurant Website",

//         description:
//             "Responsive restaurant website created using HTML, CSS and Bootstrap.",

//         image:
//             "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",

//         link: "#"
//     },

//     {
//         title: "Calculator",

//         description:
//             "Interactive calculator built using HTML, CSS and JavaScript.",

//         image:
//             "https://images.unsplash.com/photo-1587145820266-a5951ee6f620",

//         link: "#"
//     },

//     {
//         title: "Student Registration",

//         description:
//             "Responsive student registration form with JavaScript validation.",

//         image:
//             "https://images.unsplash.com/photo-1523240795612-9a054b0db644",

//         link: "#"
//     }

// ];


const projects = [
  {
    title: "Personal Portfolio Website",

    description:
      "Responsive personal portfolio website created using HTML, CSS, Bootstrap and JavaScript.",

    image:
      "https://images.unsplash.com/photo-1515879218367-8466d910aaa4",

    link: "#"
  },

  {
    title: "FoodMonch Restaurant",

    description:
      "Responsive restaurant website created using HTML, CSS and Bootstrap with an attractive food-focused design.",

    image:
      "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4",

    link: "#"
  },

  {
    title: "Todo Application",

    description:
      "Interactive todo application built using HTML, CSS and JavaScript to add, manage and delete tasks.",

    image:
      "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b",

    link: "#"
  }
];




const projectContainer =
    document.getElementById("projectContainer");


projects.forEach(function(project) {

    const projectHTML = `

        <div class="col-md-6 col-lg-4">

            <div class="card project-card">

                <img
                    src="${project.image}"
                    class="card-img-top"
                    alt="${project.title}"
                >

                <div class="card-body">

                    <h5 class="card-title">
                        ${project.title}
                    </h5>

                    <p class="card-text">
                        ${project.description}
                    </p>

                    <a
                        href="${project.link}"
                        class="btn btn-primary"
                    >
                        View Project
                    </a>

                </div>

            </div>

        </div>

    `;

    projectContainer.innerHTML += projectHTML;

});


// ================= DARK / LIGHT MODE =================

const themeBtn =
    document.getElementById("themeBtn");


themeBtn.addEventListener("click", function() {

    document.body.classList.toggle("dark-mode");

    if (
        document.body.classList.contains("dark-mode")
    ) {

        themeBtn.innerHTML =
            '<i class="bi bi-sun-fill"></i>';

    } else {

        themeBtn.innerHTML =
            '<i class="bi bi-moon-fill"></i>';

    }

});


// ================= CONTACT FORM =================

const contactForm =
    document.getElementById("contactForm");


contactForm.addEventListener("submit", function(event) {

    event.preventDefault();

    const name =
        document.getElementById("name").value.trim();

    const email =
        document.getElementById("email").value.trim();

    const message =
        document.getElementById("message").value.trim();


    if (
        name === "" ||
        email === "" ||
        message === ""
    ) {

        alert("Please fill all fields.");

        return;
    }


    alert(
        "Thank you " +
        name +
        "! Your message has been submitted."
    );


    contactForm.reset();

});


// ================= CURRENT YEAR =================

document.getElementById("year").textContent =
    new Date().getFullYear();