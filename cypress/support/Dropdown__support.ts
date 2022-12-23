import { dropdown } from "../selectors/Dropdown_selectors";

Cypress.Commands.add("checkDefaultOptionIsDisabled", () => {
  cy.get(dropdown.option_default).should("be.disabled");
});

Cypress.Commands.add("checkDefaultOptionText", (text: string) => {
  cy.get(dropdown.option_default).should("contain.text", `${text}`);
});

Cypress.Commands.add("selectFirstOptionInDropdown", () => {
  cy.get(dropdown.dropdown).select("1");
});

Cypress.Commands.add("checkFirstOptionAfterFirstWasSelected", () => {
  cy.get(dropdown.option_1).should("have.attr", "selected");
});

Cypress.Commands.add("checkSecondOptionAfterFirstWasSelected", () => {
  cy.get(dropdown.option_2).should("not.be.selected");
});

Cypress.Commands.add("selectSecondOptionInDropdown", () => {
  cy.get(dropdown.dropdown).select("2");
});

Cypress.Commands.add("checkFirstOptionAfterSecondWasSelected", () => {
  cy.get(dropdown.option_1).should("not.be.selected");
});

Cypress.Commands.add("checkSecondOptionAfterSecondWasSelected", () => {
  cy.get(dropdown.option_2).should("have.attr", "selected");
});
