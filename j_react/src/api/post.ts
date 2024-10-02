import { IFormikExample } from "../types/form";

export const post = async (
  apiUrl: string,
  formData: IFormikExample
): Promise<any> => {
  return new Promise((resolve, reject) => {
    const response = fetch(apiUrl, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    resolve(response);
  });
};
