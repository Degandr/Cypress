import { Urls } from "../../fixtures/urls";

describe("Inputs", () => {
  it("Check Input Field", () => {
    cy.visit(Urls.Inputs);
    cy.fillInputsField("20");
    cy.pressUpArrowButton(5);
    cy.checkFinalValue(25);
  });
});
