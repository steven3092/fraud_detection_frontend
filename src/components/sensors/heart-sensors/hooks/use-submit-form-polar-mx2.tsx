import { FormEvent } from "react";
import { usePatchPolarMX2 } from "../../../../hooks/use-patch-polar-mx2";
import { DeviceInfo, FetchType } from "../../../../services/utils";

export const useSubmitFormPolarMX2 = (device: DeviceInfo) => {
  const { patchPolarMX2Mutation } = usePatchPolarMX2();

  const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const params: FetchType = {
      device,
      body: formData,
    };

    await patchPolarMX2Mutation.mutateAsync(params);
  };

  return {
    handleSubmitForm,
  };
};
