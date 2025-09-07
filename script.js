const body = document.body;
const linhas = [
    "Olá, eu sou o Eduardo",
    "Seja bem vindo ao meu portfólio!",
];

let linha = 0;
let char = 0;
const velocidade = 80;
const elemento = document.getElementById("welcome");

function digitar() {
    if (linha < linhas.length) {
        if (char < linhas[linha].length) {
            // Remove o cursor antes de atualizar
            let welcomeAtual = elemento.innerHTML.replace(/<span class="cursor"><\/span>$/, "");
            elemento.innerHTML = welcomeAtual + linhas[linha].charAt(char) + '<span class="cursor"></span>';
            char++;
            setTimeout(digitar, velocidade);
        } else {
            // Remove o cursor antes de pular linha
            let welcomeAtual = elemento.innerHTML.replace(/<span class="cursor"><\/span>$/, "");
            elemento.innerHTML = welcomeAtual + "<br>";
            linha++;
            char = 0;
            setTimeout(digitar, velocidade * 3);
        }
    }
}

window.onload = digitar;