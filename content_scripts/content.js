/*
  Author: Adam Moutchou
  Start_Date: 2/12/2024
*/

let meta = document.getElementsByTagName('meta');
let webDescription;
let webKeywords;
let originalDocument = document.documentElement.innerHTML
let alertMessages = [
    "Do you want to make money by watching anime 😒",
    "Do you really intend to waste your valuable time on anime?",
    "Successful People are working hard and you're watching anime XD",
    "There are people out there making money and you're wasting your time. You're gonna regret it!",
    "Shame on you 🤬",
    "I'm disappointed in you 😔",
    "STOP RIGHT THERE🤚 God is watching ☝...",
    "Feels good wasting Time ⏳",
    "Work hard!",
    "Repent to god!",
    "You're brain need dopamine, and you must tell him NO!",
    "If you disable the extension you're just a WEAK PUNK!",
    "Does watching anime worth wasting your time?"
];

function checkForAnime(){
    if(meta.description){
        webDescription = meta.description.content;
    }else{
        return;
    }

    if(meta.keywords){
        webKeywords = meta.keywords.content;
    }else{
        return;
    }

    if(webDescription.includes('anime') || webKeywords.includes('anime')){
        document.documentElement.innerHTML = '';
        let text = document.createElement('div');
        text.style.display = "flex";
        text.style.alignItems = "center";
        text.style.justifyContent = "center";
        text.style.height = "95vh"
        text.style.fontSize = "2em";
        text.style.fontFamily = "monospace";
        let random_x = Math.floor(Math.random() * alertMessages.length);
        text.innerHTML = alertMessages[random_x];
        document.body.appendChild(text);
    }else{
        return;
    }
}

try{
    if(originalDocument != null){
        timeOut = setTimeout(checkForAnime, 200)
    }else{
        throw "There is no content!"
    }
}catch(err) {
    console.log("Error: ", err.message);
}