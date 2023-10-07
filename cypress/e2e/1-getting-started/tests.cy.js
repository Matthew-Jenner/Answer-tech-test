/// <reference types="Cypress" />

describe("log in page", () => {
	it("should render main image", () => {
		cy.visit("https://saucedemo.com");
		cy.get("meta[name=description]").should(
			"have.attr",
			"content",
			"Sauce Labs Swag Labs app",
		);
	});
});
