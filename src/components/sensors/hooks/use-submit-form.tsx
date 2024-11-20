import { FormEvent } from "react";
import { usePostMutation } from "../../../hooks/use-post-mutation";
import { DeviceType } from "../../../utils/devices";
import { FetchType } from "../../../utils/service";

export const useSubmitForm = (device: DeviceType) => {
  const { postMutation } = usePostMutation();

  const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const { properties = [], payload = [] } = device;

    const body: Record<string, FormDataEntryValue | any> = {};

    for (const e of [...properties, ...payload]) {
      body[e.name] = e.getValue ? e.getValue(device) : formData.get(e.name);
    }

    const params: FetchType = {
      device,
      body,
    };

    await postMutation.mutateAsync(params);
  };

  return {
    handleSubmitForm,
  };
};
