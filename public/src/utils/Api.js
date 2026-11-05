const baseUrl = "http://localhost:3001";

function checkResponse(res) {
  if (!res.ok) {
    return Promise.reject(`Error: ${res.status}`);
  }
  return res.json();
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
  }).then((res) => {
    if (!res.ok) {
      return Promise.reject(`Error: ${res.status}`);
    }
    return res.text().then((text) => (text ? JSON.parse(text) : null));
  });
}
