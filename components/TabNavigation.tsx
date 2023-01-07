import { status } from "@prisma/client";
import TabIcon from "./TabIcon";

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
        role="list"
        className="divide-y divide-gray-300 rounded-md border border-gray-300 md:flex md:divide-y-0 bg-white"
      >
        {tabs.map((tab, tabIdx) => (
          <li
            key={tab}
            className="relative md:flex md:flex-1"
            onClick={() => setActiveTab(tab)}
          >
            {tab === activeTab ? (
              <div className="group flex w-full items-center">
                <span className="flex items-center px-6 py-2 text-sm font-medium">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-transparent bg-black">
                    <span className="text-white">
                      <TabIcon iconName={tab} />
                    </span>
                  </span>
                  <span className="capitalize ml-4 text-sm font-medium text-gray-900 border-b border-black transition-all">
                    {tab}
                  </span>
                </span>
              </div>
            ) : (
              <div className="group flex items-center cursor-pointer">
                <span className="flex items-center px-6 py-2 text-sm font-medium">
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full border border-black">
                    <span className="text-black">
                      <TabIcon iconName={tab} />
                    </span>
                  </span>
                  <span className="capitalize ml-4 text-sm font-medium text-gray-500 border-b border-transparent group-hover:text-gray-900">
                    {tab}
                  </span>
                </span>
              </div>
            )}

            {tabIdx !== tabs.length - 1 ? (
              <>
                {/* Arrow separator for lg screens and up */}
                <div
                  className="absolute top-0 right-0 hidden h-full w-5 md:block"
                  aria-hidden="true"
                >
                  <svg
                    className="h-full w-full text-gray-300"
                    viewBox="0 0 22 80"
                    fill="none"
                    preserveAspectRatio="none"
                  >
                    <path
                      d="M0 -2L20 40L0 82"
                      vectorEffect="non-scaling-stroke"
                      stroke="currentcolor"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
              </>
            ) : null}
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default TabNavigation;
