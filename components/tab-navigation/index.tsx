import { status } from "@prisma/client";
import Tab from "./Tab";
import TabSeparator from "./TabSeparator";

const TabNavigation = ({
  activeTab,
  setActiveTab,
}: {
  activeTab: status;
  setActiveTab: (value: status) => void;
}) => {
  const tabs = Object.values(status);

  return (
    <nav aria-label="Tabs">
      <ol
        className={`divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0 bg-white`}
      >
        {tabs.map((tab, tabIdx) => (
          <li
            key={tab}
            className="relative md:flex md:flex-1"
            onClick={() => setActiveTab(tab)}
          >
            <Tab active={tab === activeTab} tab={tab} />
            {tabIdx !== tabs.length - 1 ? <TabSeparator /> : null}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default TabNavigation;
