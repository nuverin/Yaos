// html
// open modal
const modal = document.querySelector("#modal");
const btnopen = document.querySelectorAll("[data-open='modal']");
const closebtn = document.querySelector(".btn-close");

for (const elem of btnopen) {
  elem.addEventListener("click", () => {
    modal.classList.add("openmodal");
  });
}
closebtn.addEventListener("click", () => {
  modal.classList.remove("openmodal");
});
