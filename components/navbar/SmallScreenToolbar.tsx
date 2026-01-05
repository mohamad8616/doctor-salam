import ModeToggle from "../theme/ThemeToggle";
import Logo from "./Logo";

const SmallScreenToolbar = () => {
  return (
    <header className="w-full flex justify-between items-center md:hidden">
      <Logo />
      <ModeToggle />
    </header>
  );
};

export default SmallScreenToolbar;
