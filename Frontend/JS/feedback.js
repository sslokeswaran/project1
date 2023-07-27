var form = document.getElementById("formsubmit");
console.log("Entered")
form.addEventListener('submit',function(e){
  e.preventDefault();
  const  Fname = document.getElementById("fname").value;
  document.getElementById("fname").value="";
   const Lname = document.getElementById("lname").value;
   document.getElementById("lname").value="";
   const Country = document.getElementById("country").value;
   document.getElementById("country").value="";
   const Subject = document.getElementById("subject").value;
   document.getElementById("subject").value="";
   const newDate = {
    Fname:Fname,
    Lname:Lname,
    Country:Country,
    Subject:Subject,
   }
   console.log(newDate);
   fetch("http://localhost:3000/FeedBack/create", {
    method: "POST",
    body: JSON.stringify({
        Fname:Fname,
        Lname:Lname,
        Country:Country,
        Subject:Subject,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
  
});