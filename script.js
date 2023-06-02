const email = document.getElementById("email");
const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];
  if (email.value == false || email.value == "") {
    messages.push("Please check your email");
  }
  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerText = messages.join(", ");
    email.style.borderColor = "red";
    errorElement.style.fontSize = ".9rem";
    errorElement.style.color = "red";
  }
});
