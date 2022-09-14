const menuButton = document.querySelector(".hamburger");
const navColor = document.querySelectorAll(".nav-color");
const background = document.querySelector(".main-color");
const content = document.getElementById("content");
const activeClassName = "active";

function select(color) {
  background.className = color;
  content.innerHTML = color;
  closeMenu();
}

function openMenu() {
  menuButton.classList.add(activeClassName);
}

function closeMenu() {
  menuButton.classList.remove(activeClassName);
}

document.addEventListener("keypress", (e) => {
  if (e.key === "1") {
    select("grey");
  }
  if (e.key === "2") {
    select("red");
  }
  if (e.key === "3") {
    select("orange");
  }
  if (e.key === "4") {
    select("purple");
  }
  if (e.key === "5") {
    select("green");
  }
});

Array.from(navColor).forEach(function (item) {
  item.addEventListener("click", () => {
    const color = item.getAttribute("data-color");
    select(color);
  });
});
