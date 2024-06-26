"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";
import { z } from "zod";
import { redirect } from "next/navigation";

export type State = {
  errors?: {
    title?: string[];
  };
  message?: string | null;
};

const CreateBoard = z.object({
  title: z.string().min(3, { message: "Title must be at least 3 characters long" }),
});

export const createBoard = async (prevState: State, formData: FormData) => {
  const validatedFields = CreateBoard.safeParse({
    title: formData.get("title"),
  });

  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Missing fields",
    };
  }

  const { title } = validatedFields.data;

  try {
    await db.board.create({
      data: {
        title,
      },
    });
  } catch (error) {
    return {
      message: "An error occurred",
    };
  }

  revalidatePath("/organization/org_2iFWOF80ost88fJ1cmFxxGW8OMf");
  redirect("/organization/org_2iFWOF80ost88fJ1cmFxxGW8OMf");
};
