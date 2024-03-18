const caseButton = document.getElementById('case');
//This variable for precising if the extension is active or not
//The Extension is not active by default
let active = false;

//Making the button change color and text content when clicking it (Ex: form Deactive{color: red} to Active{color: green})
function toggleCases(){
    const cases = {1: 'active', 2: 'deactive'};

    //Condition where extension is active
    if(caseButton.className === cases[1]){
        active = true;
        caseButton.className = cases[2];
        caseButton.innerHTML = "Deactive";
    }
    //Condition where extension is not active
    else{
        active = false;
        caseButton.className = cases[1];
        caseButton.innerHTML = "Active";
    }
}
caseButton.addEventListener('click', toggleCases);

//Sending a message to 'content.js' when click on caseButton
caseButton.addEventListener('click', function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        if(active){
            chrome.tabs.sendMessage(tabs[0].id, {case: 'Active'});
        }else{
            chrome.tabs.sendMessage(tabs[0].id, {case: 'Deactive'});
        }
    })
})