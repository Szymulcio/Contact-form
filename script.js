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
	emailLabel.style.opacity = "0";
});

emailInput.addEventListener("blur", function () {
	if (emailInput.value === "") {
		emailLabel.style.opacity = "1";
	}
});

nameInput.addEventListener("focus", function () {
	nameLabel.style.opacity = "0";
});

nameInput.addEventListener("blur", function () {
	if (nameInput.value === "") {
		nameLabel.style.opacity = "1";
	}
});

submitButton.addEventListener("click", function () {
	let allAreFilled = true;

	form.querySelectorAll("[required]").forEach(function (input) {
		if (!input.validity.valid) {
			allAreFilled = false;
			document.querySelector(`label[for='${input.id}']`) &&
				(document.querySelector(`label[for='${input.id}']`).style.color = "#aa53c3");
			input.style.borderColor = "#aa53c3";
			input.style.color = "#aa53c3";
			return;
		}
	});

	if (!allAreFilled) {
		return;
	}

	let html = `<p class="card__message">Dziękujemy za wypełnienie formularza ${nameInput.value}, potwierdź że Twój email to
	<span>${emailInput.value}</span>,
	klikając poniższy przycisk</p>
	<a class='btn btn--confirm' href="https://www.salesmanago.pl/">Potwierdź</a>`;

	mainContent.innerHTML = "";
	mainContent.insertAdjacentHTML("afterbegin", html);
});
