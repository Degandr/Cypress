import { Urls } from "../../fixtures/urls";

describe("Authorizations", () => {
  it("Valid authorization", () => {
    cy.visit(Urls.LoginPage);
    cy.fillLogin("tomsmith");
    cy.fillPassword("SuperSecretPassword!");
    cy.clickLoginButton();
    cy.flashLoginOK("You logged into a secure area!");
    cy.clickLogoutButton();
    cy.flashLogoutOK("You logged out of the secure area!");
  });

  it("Invalid authorization", async () => {
    cy.visit(Urls.LoginPage);
    cy.fillLogin("tomsmith1");
    cy.fillPassword("SuperSecretPassword!1");
    cy.clickLoginButton();
    cy.flashNotOK("Your username is invalid!");
  });
});
