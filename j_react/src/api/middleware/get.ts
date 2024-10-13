export const getApi = async (apiUrl: string): Promise<any> => {
  try {
    const response = await fetch(apiUrl);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status} url:${apiUrl}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Error in getApi: ${error}`);
    throw error;
  }
};
