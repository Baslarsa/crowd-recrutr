import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";
import { updatedStatus } from "../../../lib/process-status";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;
  const candidate = await prisma.candidates.findUnique({ where: { email } });

  if (!candidate) return;

  const newStatus = updatedStatus(candidate?.current_status);

  if (!newStatus) return;

  try {
    const updatedCandidate = await prisma.candidates.update({
      where: { email },
      data: {
        current_status: newStatus,
      },
    });

    if (!updatedCandidate) {
      throw new Error("Could not update record in the database");
    }

    return res.status(200).json({ candidate: updatedCandidate });
  } catch (err) {
    console.error(err);

    return res.status(500).json({ message: "Could not update candidate" });
  }
};

export default handler;
