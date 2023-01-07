import dayjs from "dayjs";
import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const formValues = req.body;

  try {
    const newCandidate = await prisma.candidates.create({
      data: {
        ...formValues,
        created_at: dayjs().format(),
        current_status: "contact",
      },
    });

    if (!newCandidate) {
      throw new Error("Could not create new record to the database");
    }

    return res.status(200).json({ candidate: newCandidate });
  } catch (err) {
    console.error(err);

    return res.status(500).json({ message: "Could not create new candidate" });
  }
};

export default handler;
