import { ReactNode } from "react";

const HeaderContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="px-4 sm:px-6 py-2 flex items-center justify-between max-w-7xl mx-auto">
      {children}
    </div>
  );
};

export default HeaderContainer;
