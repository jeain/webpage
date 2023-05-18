const bttn = document.querySelector(".bttn");
const nav = document.querySelector(".header_nav");
const login = document.querySelector(".header_login");
const form = document.querySelector("#form");
const nav2 = document.querySelector(".header_nav2");


bttn.addEventListener("click", () => {
  nav.classList.toggle("active");
  form.classList.remove("active");
});

login.addEventListener("click", () => {
  form.classList.toggle("active");
});

const lb = document.querySelector(".header_library");
const rd = document.querySelector(".header_readingroom");
const lc = document.querySelector(".header_location");
const ct = document.querySelector(".header_contact");

lb.addEventListener("click", () => {
  nav.classList.remove("active");
})
rd.addEventListener("click", () => {
  nav.classList.remove("active");
})
lc.addEventListener("click", () => {
  nav.classList.remove("active");
})
ct.addEventListener("click", () => {
  nav.classList.remove("active");
})