export const fetchCardData = async () => {
  const apiUrl = "http://localhost:3003/api/card";

  const responcse = await fetch(apiUrl);

  if (!responcse.ok) {
    throw new Error("Network response was not ok!");
  }
  return responcse.json();
};
