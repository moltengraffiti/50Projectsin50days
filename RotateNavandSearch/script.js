const open = document.getElementById("open");
const close = document.getElementById("close");
const container = document.querySelector(".container");

const search = document.querySelector(".search");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  search.classList.toggle("active");
  input.focus();
});

open.addEventListener("click", () => container.classList.add("show-nav"));
close.addEventListener("click", () => container.classList.remove("show-nav"));
