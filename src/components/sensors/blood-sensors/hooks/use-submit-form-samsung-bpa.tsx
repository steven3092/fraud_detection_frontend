import { FormEvent } from "react";
import { usePatchSamsungBPA } from "../../../../hooks/use-patch-samsung-bpa";

export const useSubmitFormSamsungBPA = () => {
  const { patchSamsungBPAMutation } = usePatchSamsungBPA();

  const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    await patchSamsungBPAMutation.mutateAsync(formData);
  };

  return {
    handleSubmitForm,
  };
};
