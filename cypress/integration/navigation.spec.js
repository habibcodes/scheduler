// This test navigates to the root page
// and then clicks on Tuesday, and checks 
// to see if the appropriate class is applied

describe("Navigation", () => {
  it("should visit root", () => {
    cy.visit("/");
  });

  it("should navigate to Tuesday", () => {
    cy.visit("/");
    
    cy.contains("[data-testid=day]", "Tuesday")
      .click()
      .should("have.class", "day-list__item--selected");    
  })
});
