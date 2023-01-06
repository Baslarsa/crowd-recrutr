import { ReactNode } from "react";

const HeaderContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="py-4 flex items-center justify-between">{children}</div>
  );
};

export default HeaderContainer;
