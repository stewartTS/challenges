import { useAuth0 } from "@auth0/auth0-react";
import "./LogoutButton.css";

export default function LogoutButton() {
  const { logout } = useAuth0();
  return (
    <button onClick={() => logout()} className="logout-btn">
      Log Out
    </button>
  );
}
