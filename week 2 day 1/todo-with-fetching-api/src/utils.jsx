function getData() {
  return fetch(
    "https://json-server-mocker-masai.herokuapp.com/tasks"
  ).then((res) => res.json());
}

function addData(title) {
  const payload = {
    title,
    status: false
  };

  return fetch("https://json-server-mocker-masai.herokuapp.com/tasks", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });
}

function deleteData(id) {
  return fetch(`https://json-server-mocker-masai.herokuapp.com/tasks/${id}`, {
    method: "DELETE"
  });
}

export { getData, addData, deleteData };
