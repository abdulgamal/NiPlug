import axios from "axios";
const BASE_URL = "https://admin.niplug.com/api/v1";

axios.defaults.baseURL = "https://admin.niplug.com/api/v1";

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

export const register = async (data) => {
  return await axios.post("/register", data);
};

export const getProduct = async (id) => {
  return await axios.get(`/products/${id}`);
};

export const login = async (data) => {
  return await axios.post("/login", data);
};

export const getCatProducts = async (id) => {
  return await axios.get(`/products/bycategory/${id}`);
};

export const getCatSubs = async (id) => {
  return await axios.get(`/subcategory/bycategory/${id}`);
};

export const getCategories = async () => {
  return await axios.get("/category");
};

export const paySuccess = (id) => {
  return fetch(`${BASE_URL}/order/paid/${id}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const getUserDetails = async (token) => {
  return await axios.get("/user/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const fetchUserDetails = async (data) => {
  return await axios.post("/account", data, {
    headers: {
      "Content-Type": "application/json",
    },
  });
};

export const updatePassword = async (data, token) => {
  return await axios.post("/user/change-password", data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const addToProfile = async (data, token) => {
  return await axios.post("/user/products/add", data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const updateProfile = async (token, data) => {
  return await axios.post("/user/profile/update", data, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
};

export const resetPassword = async (data) => {
  return await axios.post("/reset/password", data);
};

export const verifyPassword = async (data) => {
  return await axios.post("/reset/verify", data);
};

export const deleteProduct = async (token, id) => {
  return await axios.delete(`/user/products/delete/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
