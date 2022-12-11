/// <reference types="cypress" />

describe("empty spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  const firstname = () => cy.get(`input[name="firstname"]`);
  const lastname = () => cy.get(`input[name="lastname"]`);
  const email = () => cy.get(`input[name="email"]`);
  const password = () => cy.get(`input[name="password"]`);
  const agree = () => cy.get(`input[name="agree"]`);
  const onboardSubmit = () => cy.contains(/Submit/i);

  it(`Opens the page`, () => {
    expect(true).to.equal(true);
  });

  describe(`Type a first name and last name into their corresponding inputs.`, () => {
    it(`Name Inputs Exist`, () => {
      firstname().should("exist");
      lastname().should("exist");
    });

    it(`Types a first name into the first name input`, () => {
      firstname().type(`Kobe`).should("have.value", "Kobe");
    });

    it(`Types a last name into the last name input`, () => {
      lastname().type(`Bryant`).should("have.value", "Bryant");
    });

    it(`Fill out the form in its entirety.`, () => {
      firstname().should("exist").type(`Kobe`).should("have.value", "Kobe");

      lastname().should("exist").type(`Bryant`).should("have.value", "Bryant");

      email().should("exist").type(`kobe-bryant@lakers.com`).should("have.value", "kobe-bryant@lakers.com");

      password().should("exist").type(`Lakers4Ever!!`).should("have.value", "Lakers4Ever!!");

      agree().should("exist").click().should("have.value", "true");

      onboardSubmit().should("exist").click();
    });

    it(`Check on validating empty inputs`, () => {
      firstname().should("exist").type(`Kobe`).clear();

      agree().should("exist").click().click();
    });
  });
});
