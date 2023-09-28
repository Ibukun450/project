const form = document.getElementById("submitBtn");
const emailInput = document.getElementById("emailLog");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", function(event) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value)) {
        event.preventDefault();
        emailInput.classList.add("error");
        errorMessage.textContent = 'Valid email required';
        errorMessage.style.display = "block";
        errorMessage.style.fontSize = '11px';
        errorMessage.style.color = 'rgba(255, 0, 0, 0.37)';
        errorMessage.style.fontWeight = '700';
    } else {
        window.location.href = "C:/Users/Pc1/Desktop/newsletter-sign-up-with-success-message-main/success_state.html";
    }
});

emailInput.addEventListener("input", function() {
    emailInput.classList.remove("error");
    errorMessage.style.display = "none";
});

const form2 = document.getElementById("submitBtn2");
const emailInput2 = document.getElementById("emailLog");
const errorMessage2 = document.getElementById("error-message");

form.addEventListener("submit", function(event) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(emailInput.value)) {
        event.preventDefault();
        emailInput.classList.add("error");
        errorMessage.textContent = 'Valid email required';
        errorMessage.style.display = "block";
        errorMessage.style.fontSize = '11px';
        errorMessage.style.color = 'rgba(255, 0, 0, 0.37)';
        errorMessage.style.fontWeight = '700';
    } else {
        window.location.href = "C:/Users/Pc1/Desktop/newsletter-sign-up-with-success-message-main/success_state.html";
    }
});

emailInput.addEventListener("input", function() {
    emailInput.classList.remove("error");
    errorMessage.style.display = "none";
});
