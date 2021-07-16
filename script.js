
const contarFreq = document.getElementById('countButton');
const letras = document.getElementById('letters');
const palavras = document.getElementById('words');
// const span = document.createElement('span');

// =================================================
let letterMin;
let words;
let qntLetter = [];
let qntWord = [];

const contador = () => {
    const textoInserido = document.getElementById('text').value;
    contarLetra(textoInserido);
    contarPalavra(textoInserido);

    // console.log(letterMin);
}

const contarLetra = (param) => {
    const letterCount = {};
    letterMin = param.toLowerCase().replace(/[^a-z'\s]+/g, "");
    for (let i = 0; i < letterMin.length; i++) {
        qntLetter = letterMin[i];
        if (letterCount[qntLetter] === undefined) {
            letterCount[qntLetter] = 1;
        } else {
            letterCount[qntLetter]++;
        }
    }
    for (let letter in letterCount) {
        let span = document.createElement("span");
        let textContent = `"${letter}": ${letterCount[letter]}, `;
        span.innerText = textContent;
        letras.appendChild(span);
    }
}

const contarPalavra =(param) =>{
    const wordsCount= {};
    words = param.toLowerCase().replace(/[^a-z'\s]+/g, "").split(' ');
    for (let i=0; i<words.length; i++){
        qntWord = words[i];
        if(wordsCount[qntWord] === undefined){
            wordsCount[qntWord] = 1;
        }else{
            wordsCount[qntWord]++;
        }
    }
    for (let word in wordsCount) {
        let span = document.createElement("span");
        let textContent = `"${word}": ${wordsCount[word]}, `;
        span.innerText = textContent;
        palavras.appendChild(span);
    }

}
contarFreq.addEventListener('click', contador);
