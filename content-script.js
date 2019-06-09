/*
copy the selected text to clipboard
*/
async function copySelection() {
    const selectedText = window.getSelection().toString().trim();
    const url = "http://127.0.0.1:5000/"
    const url2 = "https://api.github.com/events"
    if (selectedText) {
        // document.execCommand("Copy");
        
        console.log("Translating...");
     
        fetch("https://api.github.com/events")
        .then(res=>{alert("success")})
        .catch(e=>{alert("failure")})
    }
    
}

document.addEventListener("dblclick", copySelection);