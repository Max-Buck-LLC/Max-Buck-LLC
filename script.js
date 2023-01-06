let colors = ["#24d05a", "#eb4888", "#10a2f5", "#e9bc3f"];
let darkPhotos = [5, 6];
let lightPhotos = [2, 3, 4];

(function () {
  setModeEventListener();
  setTabEventListener();
  setRandomLinkColor();
  setColorHoverListener();
  setPhoto();

  setCollapsibleEventListener();

  setInterval(() => {
    setRandomLinkColor();
  }, 5000);
})();

/* Dark Mode */

function changeServicePictures() {
  let darkMode = document.body.classList.contains("dark-mode");
  if (darkMode) {
    document.getElementById("web-img").src = "./img/web.png";
    document.getElementById("mobile-img").src = "./img/mobile.png";
    document.getElementById("ai-img").src = "./img/ai.png";
    document.getElementById("cloud-img").src = "./img/cloud.png";
  } else {
    document.getElementById("web-img").src = "./img/web-black.png";
    document.getElementById("mobile-img").src = "./img/mobile-black.png";
    document.getElementById("ai-img").src = "./img/ai-black.png";
    document.getElementById("cloud-img").src = "./img/cloud-black.png";
  }
}

function setModeEventListener() {
  let list = document.body.classList;
  document.getElementById("toggler").addEventListener("change", (event) => {
    event.target.checked ? list.add("dark-mode") : list.remove("dark-mode");
    setPhoto();
    changeServicePictures();
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
  // get element by class and tag name
  Array.from(document.getElementsByClassName("maintabs")).forEach((e) => {
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

/* Collapsible */

function setCollapsibleEventListener() {
  let coll = document.getElementsByClassName("collapsible");
  let i;

  for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
      this.classList.toggle("active");

      let content = this.nextElementSibling;
      if (content.style.display === "block") {
        content.style.display = "none";
        this.innerHTML = this.innerHTML.replace("▲", "▼");
        this.firstElementChild.innerHTML = this.classList.contains("active");
      } else {
        content.style.display = "block";
        this.innerHTML = this.innerHTML.replace("▼", "▲");
      }
    });
  }
}

/* Contact Us */

function onClickContactUs(message = "") {
  /* Toggle the contact tab */
  let contactUsButton = document.getElementById("contact");
  contactUsButton.click();
  let msg_text_area = document.getElementById("msg");
  msg_text_area.value = message;
  mst_text_area.click();
}
