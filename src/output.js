import "./styles/style.css";

export default function render() {
	var el = document.createElement("div");
	el.innerHTML = "Hello boilerplate";
	el.classList.add("bold");
	return el;
}
