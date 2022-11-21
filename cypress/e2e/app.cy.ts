describe("empty spec", () => {
  it("passes", () => {
    cy.visit("https://district-money.vercel.app/");
    cy.get('a[href*="login"]').click();
    cy.url().should("include", "/login");
    cy.get("h1").contains("Connexion");
  });
});

export {};
