const API_BASE_URL = "http://localhost:5000/api";

export const api = {
  async get(url) {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      credentials: "include",
    });
    return handleResponse(response);
  },

  async post(url, body) {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      credentials: "include",
    });
    return handleResponse(response);
  },

  async put(url, body) {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
      credentials: "include",
    });
    return handleResponse(response);
  },

  async delete(url) {
    const response = await fetch(`${API_BASE_URL}${url}`, {
      method: "DELETE",
      credentials: "include",
    });
    return handleResponse(response);
  },
};

async function handleResponse(response) {
  if (!response.ok) {
    const error = await response.json().catch(() => ({}));
    throw new Error(error.message || "Something went wrong");
  }
  return response.json();
}
