const baseUrl = "http://localhost:3001";

export function checkResponse(res) {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }

  if (res.status === 204) {
    return Promise.resolve(null);
  }

  return res.text().then((text) => {
    return text ? JSON.parse(text) : null;
  });
}

export function getItems() {
  return fetch(`${baseUrl}/clothingItems`).then(checkResponse);
}

export function addItem(item) {
  return fetch(`${baseUrl}/clothingItems`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(item),
  }).then(checkResponse);
}

export function deleteItem(id) {
  return fetch(`${baseUrl}/clothingItems/${id}`, {
    method: "DELETE",
  }).then(checkResponse);
}
