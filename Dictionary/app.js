// getting html 
let input = document.querySelector("#input");
let searchBtn = document.querySelector("#search");
let notFound= document.querySelector(".not-found");
let loading = document.querySelector(".loading");
let apiKey = "add847ad-aaf3-4ed7-b7a5-8020b94a2caf";
let def = document.querySelector(".def");
let audio = document.querySelector(".audio");

searchBtn.addEventListener("click", function (e) {
    e.preventDefault();
    audio.innerHTML="";
    notFound.innerText="";
    def.innerText="";
    //get input data
    let word = input.value;

    //calling API and get data
    if (word === "") {
        alert("Please type a word");
        return;
    };

    getData(word);

});

async function getData(word) {
    loading.style.display="block";
    // ajax call dictionary API 
    const response = await fetch(`https://www.dictionaryapi.com/api/v3/references/learners/json/${word}?key=${apiKey}`).catch((error)=> {return "error"});
const data = await response.json();


// if no result found 
if(!data.length){loading.style.display="none";
    notFound.innerText="No result found";
    return;

}

    // if result is suggetions
if(typeof data[0] === "string"){
    loading.style.display="none";
    let heading = document.createElement("h3");
    heading.innerText="Did you mean ?";
    notFound.appendChild(heading);

    data.forEach(element => {
        let suggetion = document.createElement("span");
        suggetion.classList.add("tags");

        suggetion.innerText = element;
        notFound.appendChild(suggetion);
    })
    return;

}

// if result found 
loading.style.display="none";
let defination = data[0].shortdef[0];
def.innerText=defination;


// sound 
let soundData=data[0].hwi.prs[0].sound.audio;
if(soundData){
// if sound available
renderSound(soundData);
}
return;
console.log(data); 

}


function renderSound(soundData){
    let subfolder = soundData.charAt(0);
    let soundSrc = `https://media.merriam-webster.com/audio/prons/en/us/mp3/${subfolder}/${soundData}.mp3?key=${apiKey}`;

    let aud = document.createElement("audio");
    aud.src=soundSrc;
    aud.controls = true;
    audio.appendChild(aud);

}