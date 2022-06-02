"use strict";

const submitButton = document.querySelector(".btn");
const mainContent = document.querySelector(".card");
const form = document.querySelector(".contest-form");

const emailInput = document.querySelector("#email");
const emailLabel = document.querySelector('label[for="email"]');
const nameInput = document.querySelector("#name");
const nameLabel = document.querySelector('label[for="name"]');

const agreeTerms = document.querySelector(".contest-form__checkbox");

emailInput.addEventListener("focus", function () {
	emailLabel.style.zIndex = "-1";
});

emailInput.addEventListener("blur", function () {
	if (emailInput.value === "") emailLabel.style.zIndex = "1";
});

nameInput.addEventListener("focus", function () {
	nameLabel.style.zIndex = "-1";
});

nameInput.addEventListener("blur", function () {
	if (nameInput.value === "") nameLabel.style.zIndex = "1";
});

submitButton.addEventListener("click", function (e) {
	e.preventDefault();
	let allAreFilled = true;

	form.querySelectorAll("[required]").forEach(function (input) {
		if (!allAreFilled) return;
		if (!input.validity.valid) {
			allAreFilled = false;
			return;
		}
	});
	console.log(allAreFilled);

	if (!allAreFilled) {
		return;
	}

	let html = `<p class="card__message">Dziękujemy za wypełnienie formularza ${nameInput.value}, potwierdź że Twój email to <span>${emailInput.value}</span> klikając poniższy przycisk</p>
	<a class='btn btn--confirm' href="https://www.salesmanago.pl/">Potwierdź</a>`;

	mainContent.innerHTML = "";
	mainContent.insertAdjacentHTML("afterbegin", html);
});

// agreeTerms.addEventListener("hover");
