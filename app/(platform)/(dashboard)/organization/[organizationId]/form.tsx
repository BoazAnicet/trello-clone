"use client";

import { createBoard } from "@/actions/create-board";
import { useAction } from "@/hooks/useAction";
import { FormInput } from "@/components/form/form-input";
import { FormSubmit } from "@/components/form/form-submit";

export const Form = () => {
  const { execute, fieldErrors } = useAction(createBoard, {
    onSuccess: (data) => {
      console.log(data, "Success");
    },
    onError(error) {
      console.log(error, "Error");
    },
  });

  const onSubmit = (formData: FormData) => {
    const title = formData.get("title") as string;

    execute({ title });
  };

  return (
    <form action={onSubmit}>
      <FormInput label={"Board title"} id={"title"} errors={fieldErrors} defaultValue={""} />
      <FormSubmit>Save</FormSubmit>
    </form>
  );
};
