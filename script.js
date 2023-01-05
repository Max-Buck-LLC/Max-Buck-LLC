let colors = ["#24d05a", "#eb4888", "#10a2f5", "#e9bc3f"];
let darkPhotos = [5, 6];
let lightPhotos = [2, 3, 4];

(function () {
  setModeEventListener();
  setTabEventListener();
  setRandomLinkColor();
  setColorHoverListener();
  setPhoto();

  setInterval(() => {
    setRandomLinkColor();
  }, 5000);
})();

/* Dark Mode */

function setModeEventListener() {
  let list = document.body.classList;
  document.getElementById("toggler").addEventListener("change", (event) => {
    event.target.checked ? list.add("dark-mode") : list.remove("dark-mode");
    setPhoto();
  });
}

/* Colors */

function getRandomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function setRandomLinkColor() {
  Array.from(document.getElementsByTagName("a")).forEach((e) => {
    e.style.color = getRandomColor();
  });
}

function setColorHoverListener() {
  Array.from(document.querySelectorAll("a, button")).forEach((e) => {
    e.addEventListener("mouseover", setRandomLinkColor);
  });
}

/* Photos */

function setPhoto() {
  let darkMode = document.body.classList.contains("dark-mode");
  if (darkMode) {
    let photo = darkPhotos.shift();
    darkPhotos.push(photo);
    document.getElementById("propic").src = `./img/buck${photo}.png`;
  } else {
    let photo = lightPhotos.shift();
    lightPhotos.push(photo);
    document.getElementById("propic").src = `./img/buck${photo}.png`;
  }
}

/* Tab Toggles */

function setTabEventListener() {
  Array.from(document.getElementsByTagName("button")).forEach((e) => {
    e.addEventListener("click", tabToggle);
  });
}

function tabToggle(e) {
  let tabType = e.target;
  let color = getRandomColor();
  off();
  tabType.style.cssText = `border-color: ${color}; color: ${color}; font-weight: bold;`;
  let tabTypeElement = document.getElementsByClassName(tabType.id)[0];
  if (tabTypeElement !== undefined) tabTypeElement.classList.add("show");
}

function off() {
  Array.from(document.getElementsByTagName("button")).forEach((butt) => {
    butt.style.borderColor = "#96979c";
    butt.style.color = "#96979c";
  });
  Array.from(document.getElementsByClassName("tab")).forEach((e) => {
    e.classList.remove("show");
  });
}
