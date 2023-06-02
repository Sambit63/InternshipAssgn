  fetch("data.json")
  .then((response)=> response.json())
  .then((data) => {
    const recepie=data.myrecepie;
    const takendiv=document.getElementById("resturant");
    recepie.forEach(el => {
        const div=document.createElement("div");
        const image=document.createElement("img");
        image.src=el.foodUrl;
        const dishName=document.createElement("h4");
        dishName.innerText=el.foodName;
        const desc=document.createElement("p");
         div.append(image,dishName,desc);
         takendiv.append(div);
    });
    })
    .catch((error)=> {
        console.error("Error gettinf the Data",error)
    });
