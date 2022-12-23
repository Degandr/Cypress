export {};

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace Cypress {
    interface Chainable {
      fillLogin(text: string): void;
      fillPassword(text: string): void;
      clickLoginButton(): void;
      flashLoginOK(text: string): void;
      clickLogoutButton(): void;
      flashLogoutOK(text: string): void;
      flashNotOK(text: string): void;
      checkBoxDefault(): void;
      removeButtonDefault(): void;
      removeButtonClick(): void;
      removeButtonAfterClick(): void;
      textAfterRemoving(text: string): void;
      checkDefaultOptionIsDisabled(): void;
      checkDefaultOptionText(text: string): void;
      selectFirstOptionInDropdown(): void;
      checkFirstOptionAfterFirstWasSelected(): void;
      checkSecondOptionAfterFirstWasSelected(): void;
      selectSecondOptionInDropdown(): void;
      checkFirstOptionAfterSecondWasSelected(): void;
      checkSecondOptionAfterSecondWasSelected(): void;
      checkBox_1_State_default(): void;
      checkBox_2_State_default(): void;
      clickFirstCheckBox(): void;
      clickSecondCheckBox(): void;
      checkBox_1_State_afterClick(): void;
      checkBox_2_State_afterClick(): void;
      fillInputsField(number: string): void;
      pressUpArrowButton(number: number): void;
      checkFinalValue(number: number): void;
    }
  }
}
