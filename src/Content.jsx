import { Signup } from "./Signup";
import { LogoutLink } from "./LogoutLink";

export function Content() {
  return (
    <div>
      <Signup />
      <LogoutLink />
    </div>
  );
}