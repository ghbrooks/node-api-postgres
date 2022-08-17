var requestOptions = {
    method: "GET",
    redirect: "follow",
  };

  fetch("http://localhost:3000/users/", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));