import { useAuth0 } from "@auth0/auth0-react";
import "./LoginButton.css";

export default function LoginButton() {
  const { loginWithRedirect } = useAuth0();
  return (
    <button onClick={() => loginWithRedirect()} className="login-btn">
      Log In
    </button>
  );
}
