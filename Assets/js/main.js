
const form = document.getElementById("contact-form");
 
form.addEventListener("submit", (e) => {
  e.preventDefault();
 
  const name = form.name.value;
  const email = form.email.value;
  const message = form.message.value;
 

alert("Thank you for your message! We will get back to you soon.");
});