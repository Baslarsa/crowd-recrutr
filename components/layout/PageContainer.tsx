import { ReactNode } from "react";
import Footer from "./footer";
import Header from "./header/Header";
import { useRouter } from "next/router";

export const spring = {
  type: "spring",
  damping: 30,
  stiffness: 1,
  when: "afterChildren",
  duration: 5,
};

const PageContainer = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex flex-1 flex-col">
      <Header />
      <div className="px-4 sm:px-6 py-2 flex flex-col flex-1 flex-shrink-0 mx-auto max-w-7xl w-full">
        <>{children}</>
      </div>
      <Footer />
    </div>
  );
};

export default PageContainer;
