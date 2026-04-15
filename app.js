document.addEventListener("DOMContentLoaded", () => {
	const button = document.getElementById("submitBtn");

	if (!button) return;

	button.addEventListener("click", () => {
		let message = document.getElementById("clickMessage");

		if (!message) {
			message = document.createElement("p");
			message.id = "clickMessage";
			button.insertAdjacentElement("afterend", message);
		}

		message.textContent = "ボタンを押しました";
	});
});
