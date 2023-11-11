const gridbtn = document.querySelector("#grid");
const listbtn = document.querySelector("#list");
const display = document.querySelector("article");

gridbtn.addEventListener("click", () => {
    display.classList.add("grid");
    display.classList.add("list");
});

listbtn.addEventListener("click", showList);
function showList() {
    display.classList.add("list");
    display.classList.remove("grid")
}
