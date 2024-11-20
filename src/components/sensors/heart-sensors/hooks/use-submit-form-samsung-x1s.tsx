import { FormEvent } from "react";
import { usePatchSamsungX1S } from "../../../../hooks/use-patch-samsung-x1s";

export const useSubmitFormSamsungX1S = () => {
  const { patchSamsungX1SMutation } = usePatchSamsungX1S();

  const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    await patchSamsungX1SMutation.mutateAsync(formData);
  };

  return {
    handleSubmitForm,
  };
};
