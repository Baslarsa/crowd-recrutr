import { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "../../../lib/prisma";

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const candidates = await prisma.candidates.findMany();
  console.log(candidates);
  res.status(200).json({ candidates });
};

export default handler;
