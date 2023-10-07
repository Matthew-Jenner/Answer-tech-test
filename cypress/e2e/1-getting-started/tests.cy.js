/// <reference types="Cypress" />

describe("log in page", () => {
	it("should render main page", () => {
		cy.visit("https://saucedemo.com");
		cy.get("meta[name=description]").should(
			"have.attr",
			"content",
			"Sauce Labs Swag Labs app",
		);
		it("should display the page title", () => {
			cy.visit("https://saucedemo.com");
			cy.get("title").should("have.length", 1);
			cy.get("title").contains("Swag Labs");
		});
	});
	it("check login details", () => {
		cy.visit("https://saucedemo.com");
		cy.get(".login_logo").contains("Swag Labs");
		cy.get("#login_button_container").should("exist");
		cy.get(".form_column").should("exist");
	});
});
it("enters a username and verifies the input", () => {
	cy.visit("https://saucedemo.com");
	cy.get('[data-test="username"]').as("usernameInput");
	cy.get("@usernameInput").type("YourUsername");
	cy.get("@usernameInput").should("have.value", "YourUsername");
});
it("enters an invalid password and checks for error class", () => {
	cy.visit("https://saucedemo.com");
	cy.get('[data-test="password"]').as("passwordInput");
	cy.get("@passwordInput").type("InvalidPassword");
	cy.get("form").submit();
	cy.get("@passwordInput").should("have.class", "input_error");
});
it("clicks the login button", () => {
	cy.visit("https://saucedemo.com");
	cy.get('[data-test="login-button"]').as("loginButton");
	cy.get("@loginButton").click();
});
it("Logs in with a valid username and password", () => {
	cy.visit("https://saucedemo.com");

	const validUsername = "standard_user";
	const commonPassword = "secret_sauce";

	cy.get('[data-test="username"]').as("usernameInput");
	cy.get('[data-test="password"]').as("passwordInput");

	cy.get("@usernameInput").type(validUsername);
	cy.get("@passwordInput").type(commonPassword);
	cy.get('[data-test="login-button"]').click();
	cy.get(".title").should("exist");
	cy.get(".title").contains("Products");
});
