import { PrismaClient } from "@prisma/client";
import dayjs from "dayjs";
import { prisma } from "../lib/prisma";
import { candidates } from "./initial_candidates";

const main = () => {
  candidates.map(
    async ({ first_name, last_name, email, position, current_status }) => {
      await prisma.candidates.upsert({
        where: { email: "alice@prisma.io" },
        update: {},
        create: {
          first_name,
          last_name,
          email,
          position,
          current_status,
          phone: "+46 123 456 789",
          created_at: dayjs().format(),
          image_url: `https://placekitten.com/300/300?image=${Math.floor(
            Math.random() * 17
          )}`,
        },
      });
    }
  );
};

try {
  main();
  prisma.$disconnect();
} catch (error) {
  console.error(error);
  prisma.$disconnect();
  process.exit(1);
}
