let text = document.getElementById("Text");
let author = document.getElementById("author");
let button = document.querySelector("#generator");
let sound = document.getElementById("volume");
let copy = document.getElementById("copy");
let twitter = document.getElementById("twitter");

const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'feaa36a9afmshe79e4c6db161427p101e67jsnea02b0f421fd',
		'X-RapidAPI-Host': 'famous-quotes4.p.rapidapi.com'
	}
};

function outFunc() {
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copy to clipboard";
}

async function randomQuote() {
    button.innerText = "Loading Quote...";
    await fetch("https://famous-quotes4.p.rapidapi.com/random?category=all&count=1",options).then(res => res.json()).then(result => {
        //console.log(result);
        text.innerText = result[0].text;
        author.innerText = "-- " + result[0].author;
        button.innerText = "New Quote";
    });
}

button.addEventListener("click",randomQuote);

sound.addEventListener("click",() => {
    // let string = author.innerText;
    // let str = string.substring()
    let utterance = new SpeechSynthesisUtterance(`${text.innerText} by ${author.innerText}`);
    speechSynthesis.speak(utterance);
});

copy.addEventListener("click",() => {
    navigator.clipboard.writeText(text.innerText);
    var tooltip = document.getElementById("myTooltip");
    tooltip.innerHTML = "Copied!!";
});

twitter.addEventListener("click",() => {
    let tweetUrl = `https://twitter.com/intent/tweet?url=${text.innerText}`;
    window.open(tweetUrl,"_blank");
});