const nome = document.getElementById("inputName");
const mostraNome = document.getElementById("testo");
const saveButton = document.getElementById("saveButton");
const resetButton = document.getElementById("resetButton");
// mio tentativo non funzionante
/*function scrittina() {
    const testo = localStorage.getItem("nomeUtente");
    if (testo = ""){
        mostraNome.textContent = "nessun nome è stato ancora fornito";
    } else {
     mostraNome.textContent = `il nome utente è: ${testo}`;
    }
    
};*/
//metodo copiato da chatgpt che funziona...che palle
function updateSavedNameDisplay() {
    const savedName = localStorage.getItem("nomeUtente");
    mostraNome.textContent = savedName ? `Nome salvato: ${savedName}` : 'Nessun nome salvato.';
}

//evento sul button che aggiunge il nome nel local storage

saveButton.addEventListener("click", () => {
    const nomeSaved = nome.value.trim();

    if (nomeSaved) {
        localStorage.setItem("nomeUtente", nomeSaved);
        nome.value = "";
        updateSavedNameDisplay();
    }
    else {
        alert("inserisci un nome valido prima di confermare!!!")
    };
});

//evento sul button che rimuove gli elementi dal local storage 

resetButton.addEventListener("click", () => {
    localStorage.removeItem("nomeUtente");
    updateSavedNameDisplay();
})



updateSavedNameDisplay();