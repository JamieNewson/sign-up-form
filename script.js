function validatePassword() {
  if (password1.value == password2.value) {
    password1.classList.remove("unmatched-password");
    password2.classList.remove("unmatched-password");
    notifyText.setAttribute("style", "visibility: hidden");
  } else {
    password1.classList.add("unmatched-password");
    password2.classList.add("unmatched-password");
    notifyText.setAttribute("style", "visibility: visbile");
  }
}

const password1 = document.getElementById("password-1");
const password2 = document.getElementById("password-2");
const notifyText = document.querySelector(".form-input p");

password1.addEventListener("change", validatePassword);
password2.addEventListener("change", validatePassword);
