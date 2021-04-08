const tabs = document.querySelectorAll(".tabBtns button");
const contents = document.querySelectorAll(".content div");

for (let i = 0; i < tabs.length; i++) {
    tabs[i].addEventListener("click", () => {
        tabs.forEach(tab => tab.classList.remove("active"));
        contents.forEach(content => content.classList.add("hide"));
        tabs[i].classList.add("active");
        contents[i].classList.remove("hide");
    });
}