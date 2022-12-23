import { dynamicControls } from "../selectors/DynamicControls_selectors";

Cypress.Commands.add("checkBoxDefault", () => {
  cy.get(dynamicControls.checkBox).should("not.be.checked");
});

Cypress.Commands.add("removeButtonDefault", () => {
  cy.get(dynamicControls.removeButton).first().should("be.enabled");
});

Cypress.Commands.add("removeButtonClick", () => {
  cy.intercept("GET", "**/img/ajax-loader.gif").as("GIF");
  cy.get(dynamicControls.removeButton).first().click();
});

Cypress.Commands.add("removeButtonAfterClick", () => {
  cy.get(dynamicControls.removeButton).first().should("be.disabled");
});

Cypress.Commands.add("textAfterRemoving", (text: string) => {
  cy.get(dynamicControls.text).should("contain.text", `${text.trim()}`);
});
