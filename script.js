// Mobile nav toggle
const navToggle = document.getElementById("navToggle");
const siteNav = document.getElementById("siteNav");

if (navToggle && siteNav) {
  navToggle.addEventListener("click", () => {
    const isOpen = siteNav.classList.toggle("open");
    navToggle.setAttribute("aria-expanded", String(isOpen));
  });

  // Close nav when clicking a link (mobile)
  siteNav.querySelectorAll("a").forEach(a => {
    a.addEventListener("click", () => {
      siteNav.classList.remove("open");
      navToggle.setAttribute("aria-expanded", "false");
    });
  });
}

// Footer year
document.getElementById("year").textContent = new Date().getFullYear();

// Join form (demo)
const joinForm = document.getElementById("joinForm");
const formResult = document.getElementById("formResult");

if (joinForm) {
  joinForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const data = Object.fromEntries(new FormData(joinForm).entries());

    // Demo: show a success message (no network request yet)
    formResult.style.display = "block";
    formResult.textContent =
      `Thanks, ${data.name || "friend"}! We received your interest. ` +
      `Preferred track: ${data.track || "not selected"}.`;

    joinForm.reset();

    // To make this real:
    // Option A) Google Forms:
    // - Create a Google Form, then use its "formResponse" endpoint (requires field IDs).
    // Option B) Formspree / Netlify Forms:
    // - Add action="" and method="POST" to the form and configure the service.
    // Option C) Your backend:
    // - fetch("/api/join", { method:"POST", headers:{ "Content-Type":"application/json" }, body: JSON.stringify(data) })
  });
}
