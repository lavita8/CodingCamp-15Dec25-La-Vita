// NAVBAR MOBILE TOGGLE
const navToggle = document.getElementById("navToggle");
const navLinks = document.getElementById("navLinks");

if (navToggle && navLinks) {
  navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");
  });
}

// HELPER: set error text
function setError(id, msg) {
  const el = document.getElementById(id);
  if (el) el.textContent = msg;
}

// VALIDATION
function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
  // digits only, typical ID length 10-13
  return /^[0-9]{10,13}$/.test(phone);
}

// FORM HANDLING
const form = document.getElementById("messageForm");
if (form) {
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    // get values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const message = document.getElementById("message").value.trim();

    // reset errors
    setError("errName", "");
    setError("errEmail", "");
    setError("errPhone", "");
    setError("errMessage", "");

    let ok = true;

    if (name.length < 2) { setError("errName", "Name must be at least 2 characters"); ok = false; }
    if (!isValidEmail(email)) { setError("errEmail", "Email format is not valid"); ok = false; }
    if (!isValidPhone(phone)) { setError("errPhone", "Phone must be 10-13 digits"); ok = false; }
    if (message.length < 10) { setError("errMessage", "Message must be at least 10 characters"); ok = false; }

    if (!ok) return;

    // greeting "Hi, Name"
    const greet = document.getElementById("greetingTitle");
    if (greet) greet.textContent = `Hi ${name}, Welcome to Website`;

    // output box
    document.getElementById("outName").textContent = name;
    document.getElementById("outEmail").textContent = email;
    document.getElementById("outPhone").textContent = phone;
    document.getElementById("outMessage").textContent = message;

    // current time
    const now = new Date();
    const timeEl = document.getElementById("currentTime");
    if (timeEl) timeEl.textContent = `Current Time: ${now.toString()}`;

    // optional: reset form
    form.reset();
  });
}
