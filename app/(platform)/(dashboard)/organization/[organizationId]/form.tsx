"use client";

import { createBoard } from "@/actions/create-board";
import { useFormState } from "react-dom";
import { FormInput } from "./form-input";
import { FormButton } from "./form-button";

export const Form = () => {
  const initialState = { message: null, errors: {} };
  const [state, dispatch] = useFormState(createBoard, initialState);

  return (
    <form action={dispatch}>
      <FormInput errors={state?.errors} />

      <FormButton />
    </form>
  );
};
