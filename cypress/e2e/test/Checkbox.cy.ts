import { Urls } from "../../fixtures/urls";

describe("Checkbox", () => {
  it("Checkbox checking", () => {
    cy.visit(Urls.CheckBoxes);
    cy.checkBox_1_State_default();
    cy.checkBox_2_State_default();
    cy.clickFirstCheckBox();
    cy.clickSecondCheckBox();
    cy.checkBox_1_State_afterClick();
    cy.checkBox_2_State_afterClick();
  });
});
