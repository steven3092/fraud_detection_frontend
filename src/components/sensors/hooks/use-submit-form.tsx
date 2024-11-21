import { FormEvent } from "react";
import { usePostMutation } from "../../../hooks/use-post-mutation";
import { DeviceType } from "../../../utils/types";
import { FetchType } from "../../../services/post-sensor";

export const useSubmitForm = (device: DeviceType) => {
  const { postMutation } = usePostMutation();

  const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const { properties = [], payload = [] } = device;

    const body: {
      [key: string]: FormDataEntryValue | unknown;
      payload: { [key: string]: FormDataEntryValue | unknown };
    } = {
      payload: {},
    };

    for (const e of properties) {
      body[e.name] = e.getValue ? e.getValue(device) : formData.get(e.name);
    }

    for (const e of payload) {
      body.payload[e.name] = formData.get(e.name);
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
