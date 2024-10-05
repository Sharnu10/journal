export const getApi = async (apiUrl: string): Promise<any> => {
  return new Promise(async (resolve, reject) => {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error("Network response was not ok!");
    }

    if (response) {
      resolve(response.json());
    }
  });
};
