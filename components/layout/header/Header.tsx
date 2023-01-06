import { PlusIcon } from "@heroicons/react/24/solid";
import { ReactNode } from "react";
import Button from "../../Button";
import SiteLogo from "../SiteLogo";
import HeaderContainer from "./HeaderContainer";

const Header = () => {
  return (
    <header className="py-3 w-full mx-auto">
      <HeaderContainer>
        <SiteLogo />
        <Button onClick={() => {}}>
          <span className="flex items-center">
            Add Candidate
            <PlusIcon className="h-4 w-4 m-1" />
          </span>
        </Button>
      </HeaderContainer>
    </header>
  );
};

export default Header;
