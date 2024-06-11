const url="https://api.dictionaryapi.dev/api/v2/entries/en/";

const result = document.getElementById("result");
const sound = document.getElementById("sound");

const btn = document.getElementById('search-btn');

btn.addEventListener("click",()=>{
    let input = document.getElementById("search-input").value;
    console.log(input);
    fetch(`${url}${input}`)
    .then((x)=>x.json())
    .then((data)=>{
    const audioSrc = data[0].phonetics[0].audio;
    result.innerHTML = `<div class="word">
                            <h3>${input}</h3>
                            <button id="sound-btn" style="${audioSrc?'':'display:none'}" onclick="playSound()">
                                <i class="fa fa-volume-high"></i>
                            </button>
                        </div>
                        <div class="details">
                            <p>${data[0].meanings[0].partOfSpeech}</p>
                            <p>${data[0].phonetic}</p>
                        </div>
                        <p class="meaning">
                            ${data[0].meanings[0].definitions[0].definition}
                        </p>
                        <p class="example">
                        ${data[0].meanings[0].definitions[0].example || ""}
                        </p>`;
                        
    
    sound.setAttribute("src", `${data[0].phonetics[0].audio}`);
    
    });
})
function playSound(){
    sound.play();
}