const foodName=document.getElementById("food");
const foodPrice=document.getElementById("price");
const foodUrl=document.getElementById("myurl");
const foodDesc=document.getElementById("tarea");

function showFood(){
    if(foodName.value !=="" && foodPrice.value !=="" && foodUrl.value!=="" && foodDesc.value!==""){
        const obj1 = {
            id: Date.now(),
            foodName:foodName.value,
            foodPrice:foodPrice.value,
            foodUrl:foodUrl.value,
            foodDesc:foodDesc.value,
          };
          fetch("http://localhost:8080/myrecepie", {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
            },
            body: JSON.stringify(obj1),
          })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            alert("Item Added");
      })
      .catch((err) => console.log(err));
    } 
  else
   {
      alert("Fill in all the fields");   
    }
   window.location.href = "rest.html";
}
