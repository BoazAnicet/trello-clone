import { z } from "zod";

export const CreateCard = z.object({
  title: z
    .string({
      required_error: "Title is required",
      invalid_type_error: "Title must be a string",
    })
    .min(2, "Title must be at least 3 characters"),
  boardId: z.string(),
  listId: z.string(),
});
