// TODO: add code here
// TODO: add code here
window.addEventListener("load", function() {
    this.fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response){
         response.json().then(function(json) {
             const container = document.getElementById("container");
             for(let astronaut of json){
                 container.innerHTML+=`
                 <div class = "astronaut">
                 <div class = "bio">
                 <h3> ${astronaut.firstName} ${astronaut.lastName} </h3>
                     <ul>
                          <li>HoursInSpace: ${astronaut.hoursInSpace}</li>
                          <li>Active: ${astronaut.active}</li>
                          <li>Skills: ${astronaut.skills}</li>
                       </ul>
                       </div>
                     <img class = avatar src = "${astronaut.picture}" />
                     </div>
                  `;         
                }   
                });
      });
  });