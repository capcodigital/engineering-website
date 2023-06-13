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
    cy.wait(1000);
    cy.contains('a', "Capco.com").should("be.visible");
    cy.get(".culture-title").should("have.text", `You’re in good company`);
    cy.get(".culture-subtitle").should("have.text", `Meet some of the team that help to create our team culture and ...`);
  });

  it("should naviagte to the capco main site", () => {
    cy.on("uncaught:exception", (err, runnable) => {
      if (err.message) {
        console.log("ERROR");

        return false;
      }

      return true;
    });
    cy.visit("localhost:3000/#");
    cy.contains('a', "Capco.com").click();
    cy.visit("https://www.capco.com/");
    cy.get('[id=banner-home-our-people-text-intro-para-v2-290819]').should("contain", `IT'S OUR PEOPLE WHO MAKE THE CAPCO DIFFERENCE`);
  });

});