// function update(){setTimeout(update,1000);}
var ind = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
var usa = new Date().toLocaleString("en-US", {timeZone: "America/Chicago"});
var aus = new Date().toLocaleString("en-US", {timeZone: "Australia/Sydney"});

// function onload(){
//     var ind = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});

//     document.getElementById("output2").innerHTML=ind;
// setTimeout(onload,1000);
// }

// function onload(){
//     var ind2 = new Date().toLocaleString("en-US", {timeZone: "Asia/Kolkata"});
//     document.getElementById("output").innerHTML=ind2;
//     setTimeout(onload,1000)
// }
function change(){
    var country = document.getElementById("country");
    var option = country.options[country.selectedIndex];
    var update = option.value;


    if (update =="ind"){
            document.getElementById("output").innerHTML=ind;
    } 
    else if (update=="usa"){
        document.getElementById("output").innerHTML = usa;
    }
    else if(update=="aus"){
        document.getElementById("output").innerHTML = aus;
    }
    else{
        document.getElementById("output").innerHTML = "Please Select Any Time Zone";
    }

setTimeout(change, 1000)
}
