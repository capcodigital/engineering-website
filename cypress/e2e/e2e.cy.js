describe("End to end", () => {

  it("should return the correct text for Explore Capco Engineering when visitng the homepage", () => {
    cy.visit("localhost:3000/#");
    cy.get(".explore-title").should("have.text", `Explore Capco Engineering`);
    cy.contains('a', "Capabilities").should("be.visible");
    cy.wait(1000);
    cy.contains('a', "Team").should("be.visible");
    cy.wait(1000);
    cy.contains('a', "Career").should("be.visible");
    cy.wait(1000);
    cy.contains('a', "Articles").should("be.visible");
  });

  it("should navigate the user to the capco website when clickin on capco.com", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      if (err.message) {
        console.log("ERROR");

        return false;
      }

      return true;
    });
    cy.visit("localhost:3000/#");
    cy.contains('a', "Capco.com").click();
    cy.location().should((location) => {
      expect(location.href).to.eq("https://www.capco.com/");
    });

  });
});