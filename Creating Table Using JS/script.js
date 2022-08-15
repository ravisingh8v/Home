const users = [{
    "Id":1,
    "Name":"Ravi",
    "Suranme":"Singh",
    "Designation":"Frontend Dev",
    "Email":"ravisi37637@gmail.com"
},
    {
    "Id":2,
    "Name":"Suraj",
    "Suranme":"Singh",
    "Designation":"Backend",
    "Email":"surajwr765@gmail.com"
},
    {
    "Id":3,
    "Name":"Saurabh",
    "Suranme":"Yadav",
    "Designation":"Teahcer",
    "Email":"Saurabh264@gmail.com"
},
    {
    "Id":4,
    "Name":"samkeet",
    "Suranme":"kewat",
    "Designation":"frontend",
    "Email":"samkeet@gmail.com"
},
    {
    "Id":5,
    "Name":"Sahil",
    "Suranme":"Khan",
    "Designation":"QA",
    "Email":"shahilkw78@gmail.com"
},
{
    "Id":6,
    "Name":"Ramesh",
    "Suranme":"Varma",
    "Designation":"Software Dev",
    "Email":"ramesh463@gmail.com",
},];


getData(users);
    
function getData(data){
    const tbody=document.querySelector("#tbody");
    // console.log(tbody);
    data.forEach((users) => {
        const tableRow=document.createElement("tr");
        // console.log(tableRow);

        for(const items in users){
            if(['Id','Name','Suranme','Designation','Email'].includes(items)){

            
            const value=users[items];
            const tableCol = document.createElement("td");
            tableCol.textContent=value;
            tableRow.appendChild(tableCol);

        }
        }
    tbody.appendChild(tableRow);
});
}


function myfuntion(){
     var popUp = document.getElementById('pop-up');
     popUp.classList.toggle("d-none")
}
