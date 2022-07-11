const btn = document.querySelectorAll(".buton");
const tabs = document.querySelectorAll(".tab-pane");
const setion = document.querySelector(".section");

setion.addEventListener("click", function (e) {
  const id = e.target.dataset.change;
  if (id) {
    // remove selected from other buttons
    btn.forEach((btn) => {
      btn.classList.remove("active");
    });
    e.target.classList.add("active");
    // hide other articles
    tabs.forEach((article) => {
      article.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
  }
});
