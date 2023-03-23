// Check that passwords match
const pwd1 = document.getElementById("password");
const pwd2 = document.getElementById("confirm-password");

const span1 = document.getElementById("input-hint-password");

pwd2.addEventListener("input", (event) => {
  if (pwd1.value !== pwd2.value) {
    span1.textContent = "* Passwords do not match";
    span1.className = "no-match";
    pwd2.style.marginBottom = 0;
  } else {
    span1.textContent = "";
    span1.classList.remove("no-match");
  }
});
