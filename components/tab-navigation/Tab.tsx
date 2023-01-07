import { status } from "@prisma/client";
import TabIcon from "../TabIcon";

const Tab = ({ active, tab }: { active: boolean; tab: status }) => {
  return (
    <div className="group flex w-full items-center cursor-pointer">
      <span className="flex items-center px-6 py-2 text-sm font-medium">
        <span
          className={`flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border ${
            active
              ? "bg-black border-black text-white"
              : "bg-transparent border-transparent text-black"
          }`}
        >
          <TabIcon iconName={tab} />
        </span>
        <span
          className={`capitalize ml-4 text-sm font-medium text-gray-900 border-b ${
            active ? "border-black" : "border-transparent"
          } transition-all`}
        >
          {tab}
        </span>
      </span>
    </div>
  );
};

export default Tab;
