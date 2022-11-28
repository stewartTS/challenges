import LoginButton from "./LoginButton";

describe("LoginButton", () => {
  it("Check the loginbutton renders correctly", () => {
    cy.mount(<LoginButton />);
  });

  it("Check the loginbutton renders correctly with correct text", () => {
    cy.mount(<LoginButton />);
    cy.get("button").contains("Log In");
  });
});
