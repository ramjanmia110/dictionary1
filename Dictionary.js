
const URL ="https://api.dictionaryapi.dev/api/v2/entries/en/"
const result =document.getElementById("result");
const sound =document.getElementById("sound");
const SearchBtn =document.getElementById("SearchBtn");

SearchBtn.addEventListener("click", ()=>{
    const inputBox =document.getElementById("input-box").value;
    fetch(`${URL}${inputBox}`)
    .then(response => response.json())
    .then(json => {
       
        result.innerHTML =`
        <div id="result">
        <div class="text-info">
            <h3>${inputBox }</h3>
            <button onclick="PlaySound()">
                <i class="fa-solid fa-volume-high"></i>
            </button>
        </div>

        <div class="Details">
            <p>${json[0].meanings[0].partOfSpeech}</p>
            <p>/${json[0].phonetic}/</p>
        </div>
        <p class="word">
         ${json[0].meanings[0].definitions[0].definition}
        </p>
        <p class="meaning">
        ${json[0].meanings[0].definitions[0].example || ""}
        </p>
    </div>
        `
        sound.setAttribute("src", `${json[0].phonetics[0].audio}`)
      
    }).catch(()=>{
        result.innerHTML =`
        <div class="err">
      <h3>The Word Couldn't Found</h3>
        </div>
        `
    })

   
})

function PlaySound(){
    sound.play()
}

