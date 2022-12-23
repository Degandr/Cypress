import { Urls } from "../../fixtures/urls";

describe("Dropdown", () => {
  it("Dropdown checking", () => {
    cy.visit(Urls.Dropdown);
    cy.checkDefaultOptionIsDisabled();
    cy.checkDefaultOptionText("Please select an option");
    cy.selectFirstOptionInDropdown();
    cy.checkFirstOptionAfterFirstWasSelected();
    cy.checkSecondOptionAfterFirstWasSelected();
    cy.selectSecondOptionInDropdown();
    cy.checkFirstOptionAfterSecondWasSelected();
    cy.checkSecondOptionAfterSecondWasSelected();
  });
});
