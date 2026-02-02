const cat = document.getElementById("button-cat");
const dog = document.getElementById("button-dog");

cat.addEventListener("click", async function() {
   const response = await fetch("https://cataas.com/cat?type=square&position=center")
   const data = await response.blob();
   console.log(data);
   document.getElementById("cat-image").src = URL.createObjectURL(data);
});
dog.addEventListener("click", async function() {
   const response = await fetch("https://dogapi.dog/api/v2/facts?limit=1") 
   const data = await response.json(); 
   
   const dogfact= data.data[0].attributes.body

   console.log(data);
   document.getElementById("dog-fact").textContent = dogfact;
});


   