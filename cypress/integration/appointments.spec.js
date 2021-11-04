// This test confirs proper render of Monday page;
// it books, saves, and confirms an interview
// was booked; it edits an interview; and 
// it checks functionality of canceling an 
// interview. It then checks to make sure that
// appointment slot is now empty post cancel. 

describe("Appointments", () => {
  // Reset test conditions //------------------------------
  beforeEach(() => {
    cy.request("GET", "/api/debug/reset");
    cy.visit("/");
    cy.contains("Monday");
  });
  // Test if able to book interview//------------------------------
  it("should book an interview", () => {
    cy.get("[alt=Add]")
      .first()
      .click();
 
  cy.get("[data-testid=student-name-input]")
    .type("Lydia Miller-Jones");
  cy.get('[alt="Sylvia Palmer"]')
    .click();

  cy.contains("Save")
    .click();

  cy.contains(".appointment__card--show", "Lydia Miller-Jones");
  cy.contains(".appointment__card--show", "Sylvia Palmer");
  });
  // Test if able to edit interview //------------------------------
  it("should edit an interview", () => {
    cy.get("[alt=Edit]")
      .first()
      .click({ force: true });

    cy.get("[data-testid=student-name-input]")
      .clear()
      .type("Lydia Miller-Jones");
    cy.get("[alt='Tori Malcolm']")
      .click();
  
    cy.contains("Save")
      .click();
  
    cy.contains(".appointment__card--show", "Lydia Miller-Jones");
    cy.contains(".appointment__card--show", "Tori Malcolm");
  });
  // Test if able to cancel interview and delete button //------------------------------
  it("should cancel an interview", () => {
    cy.get("[alt=Delete]")
      .click({ force: true });

    cy.contains("Confirm")
      .click();

    cy.contains("Deleting")
      .should("exist");
    cy.contains("Deleting")
      .should("not.exist");

    cy.contains(".appointment__card--show", "Archie Cohen")
      .should("not.exist");
  })

});