//FAQ
document.addEventListener("DOMContentLoaded", function () {
    const questions = document.querySelectorAll(".question");

    questions.forEach(function (question) {
        question.addEventListener("click", function () {
            const answer = question.nextElementSibling;
            toggleAnswer(answer);
        });
    });
});

function toggleAnswer(answer) {
    if (answer.style.display === "none" || answer.style.display === "") {
        const allAnswers = document.querySelectorAll(".answer");
        allAnswers.forEach(function (answer) {
            answer.style.display = "none";
        });
        answer.style.display = "block";
        
    } else {
        answer.style.display = "none";
    }
}
// regex
document.addEventListener('DOMContentLoaded', function() {
    var form = document.querySelector('.regitre-j');
    form.addEventListener('submit', function(event) {
        var fullName = document.getElementById('full-name').value;
        var cin = document.getElementById('cin').value;
        var tel = document.getElementById('tel').value;
        var email = document.getElementById('email').value;
        var ville = document.getElementById('ville').value;
        var plans = document.getElementById('plans').value;

        var fullNameRegex = /^[A-Za-z\s']{3,}$/;
        var cinRegex = /^[a-zA-Z]{2}\d{6}$/;
        var telRegex = /^\+212\d{9}$/;
        var emailRegex = /^\S+@\S+\.\S+$/;
     
        if (!fullNameRegex.test(fullName)) {
            alert("Please enter a valid full name (minimum 3 characters).");
            console.log(1);
            event.preventDefault();
            return;
            
        }

        if (!cinRegex.test(cin)) {
            alert("Please enter a valid CIN (8 digits).");
            event.preventDefault();
            return;
        }

        if (!telRegex.test(tel)) {
            alert("Please enter a valid phone number (starts with +212 and followed by 9 digits).");
            event.preventDefault();
            return;
        }

        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            event.preventDefault();
            return;
        }

        if (ville === "") {
            alert("Please choose a city.");
            event.preventDefault();
            return;
        }

        if (plans === "") {
            alert("Please choose a plan.");
            event.preventDefault();
            return;
        }
    });

});
//burger Menu
const humberger = document.querySelector(".humberger");
const navmenu = document.querySelector(".navbar");

humberger.addEventListener("click",()=>{
    humberger.classList.toggle("active");
    navmenu.classList.toggle("active");
})
document.querySelectorAll(".navbar li").forEach(n=> n.addEventListener("click",()=>{
     humberger.classList.remove("active");
     navmenu.classList.remove("active");
}));