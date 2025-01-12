// document.addEventListener("DOMContentLoaded", () => {
//     const container = document.querySelector('.container-js');
//     const registration = document.querySelector('.register-btn');
//     const loginBtn = document.querySelector('.login-btn');

//     registration.addEventListener('click', () => {
//         container.classList.add('active');
//     });
//     loginBtn.addEventListener('click', () => {
//         container.classList.remove('active');
//     });
// });


// (() => {
//     "use strict";

//     const forms = document.querySelectorAll(".needs-validation");

//     // Loop over them and prevent submission if invalid
//     Array.from(forms).forEach((form) => {
//         form.addEventListener(
//             "submit",
//             (event) => {
//                 if (!form.checkValidity()) {
//                     event.preventDefault();
//                     event.stopPropagation();
//                 }

//                 form.classList.add("was-validated");
//             },
//             false
//         );
//     });
// })();


// navbar shadow

window.onscroll = function () {
    headerShadow();
};
function headerShadow() {
    const navHeader = document.getElementById("header");
    if (navHeader === null) {
        console.error("navHeader is null");
        return;
    }
    try {
        if (
            document.body.scrollTop > 50 ||
            document.documentElement.scrollTop > 50
        ) {
            navHeader.style.boxShadow =
                "0 7px 7px rgba(42, 216, 243, 0.8)";

        } else {
            navHeader.style.boxShadow = "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px";
            
            
        }
    } catch (error) {
        console.error("Error in headerShadow: ", error);
    }
}


document.addEventListener("DOMContentLoaded", () => {
    const container = document.querySelector('.container-js');
    const registration = document.querySelector('.register-btn');
    const loginBtn = document.querySelector('.login-btn');
    const activeForm = document.querySelector('#active-form');

    // Initialize based on active form
    if (activeForm.value === 'register') {
        container.classList.add('active');
    } else {
        container.classList.remove('active');
    }

    // Handle button clicks
    registration.addEventListener('click', () => {
        container.classList.add('active');
        activeForm.value = 'register';
    });
    loginBtn.addEventListener('click', () => {
        container.classList.remove('active');
        activeForm.value = 'login';
    });
});

