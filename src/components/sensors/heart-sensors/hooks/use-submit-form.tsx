import { FormEvent } from "react";
import { usePostMutation } from "../../../../hooks/use-post-mutation";
import { DeviceInfo, FetchType } from "../../../../services/utils";

export const useSubmitForm = (device: DeviceInfo) => {
  const { postMutation } = usePostMutation();

  const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const { properties: PROPERTIES = [], payload: PAYLOAD = [] } = device;

    const body = {};

    [...PROPERTIES, ...PAYLOAD].forEach((e) => {
      body[e.name] = e.getValue ? e.getValue(device) : formData.get(e.name);
    });

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
