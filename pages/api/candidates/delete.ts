import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const { email } = req.body;

  try {
    const deletedCandidate = await prisma.candidates.delete({
      where: { email },
    });

    if (!deletedCandidate) {
      throw new Error("Could not delete record in the database");
    }

    return res.status(200).json({ candidate: deletedCandidate });
  } catch (err) {
    console.error(err);

    return res.status(500).json({ message: "Could not delete candidate" });
  }
};

export default handler;
