import LogoutButton from "./LogoutButton";

describe("LogoutButton", () => {
  it("Check the logoutbutton renders correctly", () => {
    cy.mount(<LogoutButton />);
  });

  it("Check the logoutbutton renders correctly with correct text", () => {
    cy.mount(<LogoutButton />);
    cy.get("button").contains("Log Out");
  });
});
