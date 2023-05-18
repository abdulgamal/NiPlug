const BASE_URL = "https://admin.niplug.com/api/v1";

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

export const register = (data) => {
  return fetch(`${BASE_URL}/register`, {
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

export const login = (data) => {
  return fetch(`${BASE_URL}/login`, {
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

export const getCatProducts = (id) => {
  return fetch(`${BASE_URL}/products/bycategory/${id}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });
};
export const getCatSubs = (id) => {
  return fetch(`${BASE_URL}/subcategory/bycategory/${id}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const getProduct = (id) => {
  return fetch(`${BASE_URL}/products/${id}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const getCategories = () => {
  return fetch(`${BASE_URL}/category`)
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });
};
export const getSubCategories = () => {
  return fetch(`${BASE_URL}/sub_category`)
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const paySuccess = (id) => {
  return fetch(`${BASE_URL}/order/paid/${id}`)
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const getUserDetails = (token) => {
  return fetch(`${BASE_URL}/user/profile`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const fetchUserDetails = (data) => {
  return fetch(`${BASE_URL}/account`, {
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

export const updatePassword = (data, token) => {
  return fetch(`${BASE_URL}/user/change-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });
};
export const addToProfile = (data, token) => {
  return fetch(`${BASE_URL}/user/products/add`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const updateProfile = (token, data) => {
  return fetch(`${BASE_URL}/user/profile/update`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });
};

export const resetPassword = (data) => {
  return fetch(`${BASE_URL}/reset/password`, {
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
export const verifyPassword = (data) => {
  return fetch(`${BASE_URL}/reset/verify`, {
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

export const deleteProduct = (token, id) => {
  return fetch(`${BASE_URL}/user/products/delete/${id}`, {
    method: "DELETE",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  })
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error:", error);
    });
};
