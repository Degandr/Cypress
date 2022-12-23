import { checkBox } from "../selectors/CheckBox_selectors";

Cypress.Commands.add("checkBox_1_State_default", () => {
  cy.get(checkBox.common).first().should("not.be.checked");
});

Cypress.Commands.add("checkBox_2_State_default", () => {
  cy.get(checkBox.checkbox_n).last().should("be.checked");
});

Cypress.Commands.add("clickFirstCheckBox", () => {
  cy.get(checkBox.common).first().click();
});

Cypress.Commands.add("clickSecondCheckBox", () => {
  cy.get(checkBox.common).last().click();
});

Cypress.Commands.add("checkBox_1_State_afterClick", () => {
  cy.get(checkBox.common).first().should("not.be.checked");
});

Cypress.Commands.add("checkBox_2_State_afterClick", () => {
  cy.get(checkBox.checkbox_n).last().should("be.checked");
});
