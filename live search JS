const cardBlog = document.querySelector("[data-aria]");
const blog = document.querySelectorAll(".blog");
const Name = document.querySelectorAll("[data-h1]");

const List = () => {
	const dataValue = searchInput.value.toUpperCase();
	for (var i = 0; i < Name.length; i++) {
		let data = blog[i].textContent || blog[i].innerHTML;
		if (blog[i].querySelectorAll("[data-h1]")) {
			if (data.toUpperCase().includes(dataValue)) {
				blog[i].style.display = "";
			} else {
				blog[i].style.display = "none";
			}
		}
	}
};
