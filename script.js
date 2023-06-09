const userEmail = document.querySelector(".email-input");
const reqAccBtn = document.querySelector(".reqAcc-btn");
const errorMsg = document.querySelector(".error");


reqAccBtn.addEventListener("click", (e) => {
const emailInput = document.getElementById("email").value;
const emailChecker = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/; 

if(!emailChecker.test(emailInput.toLowerCase())) {
    errorMsg.style.display = "block";
    e.preventDefault();
}
});