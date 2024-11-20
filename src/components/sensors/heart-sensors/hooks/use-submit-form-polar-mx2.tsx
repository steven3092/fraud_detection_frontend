import { FormEvent } from "react";
import { usePatchPolarMX2 } from "../../../../hooks/use-patch-polar-mx2";

export const useSubmitFormPolarMX2 = () => {
  const { patchPolarMX2Mutation } = usePatchPolarMX2();

  const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    await patchPolarMX2Mutation.mutateAsync(formData);
  };

  return {
    handleSubmitForm,
  };
};
