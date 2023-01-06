import {
  CalendarDaysIcon,
  ChatBubbleBottomCenterTextIcon,
  DocumentCheckIcon,
  DocumentMagnifyingGlassIcon,
  UserGroupIcon,
} from "@heroicons/react/24/solid";
import { status } from "@prisma/client";
import { ReactComponentElement, ReactElement } from "react";

const TabIcon = ({ iconName }: { iconName: status }) => {
  switch (iconName) {
    case status.contact:
      return <UserGroupIcon className="h-4 w-4" />;
    case status.dialogue:
      return <ChatBubbleBottomCenterTextIcon className="h-4 w-4" />;
    case status.interview:
      return <CalendarDaysIcon className="h-4 w-4" />;
    case status.offer:
      return <DocumentMagnifyingGlassIcon className="h-4 w-4" />;
    case status.closed:
      return <DocumentCheckIcon className="h-4 w-4" />;
    default:
      return <></>;
  }
};

export default TabIcon;
