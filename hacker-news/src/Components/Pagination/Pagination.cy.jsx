import Pagination from "./Pagination";

describe("pagination", () => {
  it("check pagination renders", () => {
    cy.mount(<Pagination totalPosts={10} postsPerPage={1} />);
  });

  it("check pagination renders correct number of pages with exact number", () => {
    cy.mount(<Pagination totalPosts={10} postsPerPage={1} />);
    cy.get("button").should("have.length", 10);
  });

  it("check pagination renders additonal pages", () => {
    cy.mount(<Pagination totalPosts={11} postsPerPage={2} />);
    cy.get("button").should("have.length", 6);
  });
});
