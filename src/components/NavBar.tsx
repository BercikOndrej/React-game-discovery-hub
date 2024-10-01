import logo from "../assets/logo.webp";
import { ModeToggle } from "@/components/ui/mode-toggle";

const NavBar = () => {
  return (
    <div className="flex flex-row justify-between items-center gap-4 p-4">
      <img src={logo} width="60px" height="60px" />
      <ModeToggle />
    </div>
  );
};

export default NavBar;
