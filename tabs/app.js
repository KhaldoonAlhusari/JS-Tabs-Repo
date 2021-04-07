const tab1 = document.getElementById("tab-1");
const tab2 = document.getElementById("tab-2");
const tab3 = document.getElementById("tab-3");
const tabs = [tab1, tab2, tab3];
const tab1Content = document.getElementById("tab-1-content");
const tab2Content = document.getElementById("tab-2-content");
const tab3Content = document.getElementById("tab-3-content");
const tabContents = [tab1Content, tab2Content, tab3Content];

tab1.addEventListener("click", () => {displayTab(tab1, tab1Content)});
tab2.addEventListener("click", () => {displayTab(tab2, tab2Content)});
tab3.addEventListener("click", () => {displayTab(tab3, tab3Content)});

function displayTab(tab, tabContent) {
    for (let i = 0; i < tabs.length; i++) {
        if (tabs[i].classList.contains("active")) {
            tabs[i].classList.remove("active");
            tabContents[i].classList.add("hide");
        }
    }
    tab.classList.add("active");
    tabContent.classList.remove("hide");
}