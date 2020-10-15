function enfase(event) {

    var idElemento = event.target.id;

    if (idElemento) {
        document.getElementById(idElemento).style.borderColor = 'yellow';
    }
}

function reiniciaEstilo(event) {


    if (event.target.className === "column") {
        document.getElementById(event.target.id).style.borderColor = '#222';
    }

}