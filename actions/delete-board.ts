"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const DeleteBoard = z.object({
  id: z.string(),
});

export const deleteBoard = async (id: string) => {
  await db.board.delete({
    where: {
      id,
    },
  });

  revalidatePath("/organization/org_2iFWOF80ost88fJ1cmFxxGW8OMf");
};
