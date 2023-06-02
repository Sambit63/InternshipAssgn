const takenemail = document.getElementById("email");
const takenpassword = document.getElementById("pass");
const takenname=document.getElementById("name");
const takenphone=document.getElementById("number");
function submitData() {
//   e.preventDefault();
  if (takenemail.value !== "" && takenpassword.value !== "" && takenname.value !=="" && takenphone.value!=="") {
    const obj = {
      id: Date.now(),
      email: takenemail.value,
      password: takenpassword.value,
      name:takenname.value,
      phone:takenphone.value,
    };
    fetch("http://localhost:8080/myData", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        alert("Account Created");
      })
      .catch((err) => console.log(err));
    } else {
      alert("Fill in all the fields");
    }
   window.location.href = "./login.html";
}