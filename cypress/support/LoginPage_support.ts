import { loginPage } from "../selectors/LoginPage_selectors";

Cypress.Commands.add("fillLogin", (text: string) => {
  cy.get(loginPage.loginField).type(text);
});

Cypress.Commands.add("fillPassword", (text: string) => {
  cy.get(loginPage.passwordField).type(text);
});

Cypress.Commands.add("clickLoginButton", () => {
  cy.intercept("GET", "**/secure").as("pageOpen");
  cy.get(loginPage.loginButton).click();
  cy.wait("@pageOpen");
});

Cypress.Commands.add("flashLoginOK", (text: string) => {
  cy.get(loginPage.flashSuccess).should("contain.text", `${text.trim()}`);
});

Cypress.Commands.add("clickLogoutButton", () => {
  cy.get(loginPage.logoutButton).click();
});

Cypress.Commands.add("flashLogoutOK", (text: string) => {
  cy.get(loginPage.flashSuccess).should("contain.text", `${text.trim()}`);
});

Cypress.Commands.add("flashNotOK", (text: string) => {
  cy.get(loginPage.flashFailed).should("contain.text", `${text.trim()}`);
});
