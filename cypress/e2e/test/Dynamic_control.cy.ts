import { Urls } from "../../fixtures/urls";

describe("Dynamic Controls", () => {
  it("CheckBox Removing", () => {
    cy.visit(Urls.DynamicControls);
    cy.checkBoxDefault();
    cy.removeButtonDefault();
    cy.removeButtonClick();
    cy.removeButtonAfterClick();
    cy.textAfterRemoving("It's gone!");
  });
});
