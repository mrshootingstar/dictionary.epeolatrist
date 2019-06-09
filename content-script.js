async function copySelection() {
    const APIkey = "93a44aeb-bb02-43ed-bb91-82dc3255f49b"
    const selectedText = window.getSelection().toString().trim().toLowerCase();
    if (selectedText) {
        const url = `https://dictionaryapi.com/api/v3/references/collegiate/json/${selectedText}?key=${APIkey}`
        fetch(url)
        .then( function(res){
            // alert("success")
            data = res.json();
            return data
        }).then ( translation => {
            console.log(translation[0]['shortdef'].join(" | "));
        })
        .catch( function(e){
            alert("failure")
        })
    } 
}
document.addEventListener("dblclick", copySelection);