import mockData from "../fixtures/exchange.json";

describe("E2E test", () => {
  beforeEach(() => {
    cy.intercept(
      "GET",
      "https://api.coingecko.com/api/v3/exchanges?per_page=10&page=1",
      { fixture: "exchange.json" }
    );
  });
  it("reder homepage successfully", () => {
    cy.visit("/");
    cy.get("thead tr th").should(($cells) => {
      expect($cells[0]).to.have.text("Name");
      expect($cells[1]).to.have.text("Country");
      expect($cells[2]).to.have.text("URL");
      expect($cells[3]).to.have.text("Logo");
      expect($cells[4]).to.have.text("Rank");
    });
    cy.get("tbody > tr").should("have.length", 10);
    cy.get("td:nth-child(5)").should(($cells) => {
      expect($cells[0]).to.have.text("1");
      expect($cells[1]).to.have.text("2");
      expect($cells[2]).to.have.text("3");
      expect($cells[3]).to.have.text("4");
      expect($cells[4]).to.have.text("5");
      expect($cells[5]).to.have.text("6");
      expect($cells[6]).to.have.text("7");
      expect($cells[7]).to.have.text("8");
      expect($cells[8]).to.have.text("9");
      expect($cells[9]).to.have.text("10");
    });
  });

  it("render view detail", () => {
    cy.visit("/");

    cy.get("tbody > tr").eq(0).click();
    cy.wait(100);

    cy.get("td:nth-child(2)").should(($cells) => {
      expect($cells[0]).to.have.text(mockData[0].name);
      expect($cells[1]).to.have.text(mockData[0].country);
      expect($cells[4]).to.have.text(mockData[0].year_established);
      expect($cells[5]).to.have.text(mockData[0].description);
    });

    cy.contains("Back").click();
    cy.get("tbody > tr").eq(1).click();
    cy.wait(100);

    cy.get("td:nth-child(2)").should(($cells) => {
      expect($cells[0]).to.have.text(mockData[1].name);
      expect($cells[1]).to.have.text(mockData[1].country);
      expect($cells[4]).to.have.text(mockData[1].year_established);
      expect($cells[5]).to.have.text(mockData[1].description);
    });

    cy.contains("Back").click();
  });
});
