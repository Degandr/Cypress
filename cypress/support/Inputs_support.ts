import { inputs } from "../selectors/Inpust_selectors";

Cypress.Commands.add("fillInputsField", (number: string) => {
  cy.get(inputs.field).type(number);
});

Cypress.Commands.add("pressUpArrowButton", (number: number) => {
  Cypress._.times(number, () => cy.get(inputs.field).type(`{upArrow}`));
});

Cypress.Commands.add("checkFinalValue", (number: number) => {
  cy.get(inputs.field).should("contain.value", number);
});
