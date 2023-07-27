var form = document.getElementById("formsubmit");
console.log("Entered")
form.addEventListener('submit',function(e){
  e.preventDefault();
  const  FirstName = document.getElementById("FirstName").value;
  document.getElementById("FirstName").value="";
   const LastName = document.getElementById("LastName").value;
   document.getElementById("LastName").value="";
   const Username = document.getElementById("Username").value;
   document.getElementById("Username").value="";
   const City = document.getElementById("City").value;
   document.getElementById("City").value="";
  //  const datemonth = document.getElementById("date_month").value;
  //  const  dob_year= document.getElementById("dob_year").value;
   const State = document.getElementById("State").value;
   document.getElementById("State").value="";
   const Pin = document.getElementById("Pin").value;
   document.getElementById("Pin").value="";
   const newDate = {
    FirstName:FirstName,
    LastName:LastName,
    Username:Username,
    City:City,
    State:State,
    Pin:Pin,
   }
   console.log(newDate);
   fetch("http://localhost:3000/Details/create", {
    method: "POST",
    body: JSON.stringify({
        FirstName:FirstName,
        LastName:LastName,
        Username:Username,
        City:City,
        State:State,
        Pin:Pin,
    }),
    headers: {
      "Content-type": "application/json; charset=UTF-8"
    }
  });
  
});