import Card from "./Card.jsx";

describe("Card", () => {
  const data = {
    title: "test",
    by: "User",
    time: 1669630123,
    score: 100,
  };

  const dataLink = {
    title: "test",
    by: "User",
    time: 1669630123,
    score: 100,
    url: "https://www.google.com",
  };

  it("Check that the card mounts with correct info", () => {
    cy.mount(<Card data={data} />);
  });

  it("Check that the link is not shown when not provided", () => {
    cy.mount(<Card data={data} />);
    cy.contains("Link:").should("not.exist");
  });

  it("Check that the link is shown when provided", () => {
    cy.mount(<Card data={dataLink} />);
    cy.get('[data-cy="link"]');
  });
});
