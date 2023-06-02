fetch("http://localhost:8080/myData",{
    method:"GET",
})
  .then((response) => response.json())
  .then((data) => console.log(data));