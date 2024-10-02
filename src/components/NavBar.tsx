import logo from "@/assets/logo.webp";
import { ModeToggle } from "@/components/ui/mode-toggle";
import SearchInput from "@/components/SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
}

const NavBar = ({ onSearch }: Props) => {
  return (
    <div className="flex flex-row justify-between items-center gap-4 p-4">
      <img src={logo} width="60px" height="60px" />
      <SearchInput onSearch={onSearch} />
      <ModeToggle />
    </div>
  );
};

export default NavBar;
