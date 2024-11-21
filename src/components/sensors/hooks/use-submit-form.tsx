import { FormEvent } from "react";
import { usePostMutation } from "../../../hooks/use-post-mutation";
import { DeviceType } from "../../../utils/types";
import { FetchType } from "../../../services/post-sensor";

const buildBody = (device: DeviceType, formData: FormData) => {
  const { properties = [], payload = [] } = device;

  const body: {
    [key: string]: FormDataEntryValue | unknown;
    payload?: { [key: string]: FormDataEntryValue | unknown };
  } = {};

  for (const e of properties) {
    body[e.name] = e.getValue ? e.getValue(device) : formData.get(e.name);
  }

  if (payload && payload.length > 0) {
    body.payload = {};
    for (const e of payload) {
      body.payload[e.name] = formData.get(e.name);
    }
  }

  return body;
};

export const useSubmitForm = (device: DeviceType) => {
  const { postMutation } = usePostMutation();

  const handleSubmitForm = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.target as HTMLFormElement);

    const body = buildBody(device, formData);

    const params: FetchType = {
      device,
      body,
    };

    try {
      await postMutation.mutateAsync(params);
    } catch (error) {
      console.log(error);
    }
  };

  return {
    handleSubmitForm,
  };
};
