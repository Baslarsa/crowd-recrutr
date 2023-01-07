import { status } from "@prisma/client";

export const updatedStatus = (currentStatus: status) => {
  const statuses = Object.values(status);
  const nextStatusIndex = statuses.indexOf(currentStatus) + 1;

  if (nextStatusIndex >= statuses.length) return null;

  return statuses[nextStatusIndex];
};
