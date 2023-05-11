const BASE_URL = "https://app.dukaapp.com/api/v1";

export const getDetails = (slug) => {
  return fetch(`${BASE_URL}/pages/show/${slug}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const checkoutHandle = (data) => {
  return fetch(`${BASE_URL}/mpesa/stk`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });
};
