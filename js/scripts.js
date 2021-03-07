let x = document.querySelector(".x");
let o = document.querySelector(".o");
let messageContainer = document.querySelector("#message");
let messageText = document.querySelector("#message p");
let boxes = document.querySelectorAll(".box");
let back = document.querySelectorAll("#back"); // add
let buttons = document.querySelectorAll("#buttons-container button");

let secondPlayer;

// Contador de jogadas
let player1 = 0;
let player2 = 0;

function checkElement(player1, player2) {
    if(player1 == player2) {
        // Player1 = x
        element = x;
    } else {
        // Player2 = o
        element = o;
    }

    return element;
}

// Checa quem ganhou
function checkWinCondition() {

    let box1 = document.getElementById("block-1");
    let box2 = document.getElementById("block-2");
    let box3 = document.getElementById("block-3");
    let box4 = document.getElementById("block-4");
    let box5 = document.getElementById("block-5");
    let box6 = document.getElementById("block-6");
    let box7 = document.getElementById("block-7");
    let box8 = document.getElementById("block-8");
    let box9 = document.getElementById("block-9");

    // formas horizontais
    if(box1.childNodes.length > 0 && box2.childNodes.length > 0 && box3.childNodes.length > 0) {

        let box1Child = box1.childNodes[0].className;
        let box2Child = box2.childNodes[0].className;
        let box3Child = box3.childNodes[0].className;

        if(box1Child == "x" && box2Child == "x" && box3Child == "x") {
            // "x" venceu
            declareWinner("x");
        } else if(box1Child == "o" && box2Child == "o" && box3Child == "o") {
            // "o" venceu
            declareWinner("o");
        }

    }

    if(box4.childNodes.length > 0 && box5.childNodes.length > 0 && box6.childNodes.length > 0) {

        let box4Child = box4.childNodes[0].className;
        let box5Child = box5.childNodes[0].className;
        let box6Child = box6.childNodes[0].className;

        if(box4Child == "x" && box5Child == "x" && box6Child == "x") {
            // "x" venceu
            declareWinner("x");
        } else if(box4Child == "o" && box5Child == "o" && box6Child == "o") {
            // "o" venceu
            declareWinner("o");
        }

    }

    if(box7.childNodes.length > 0 && box8.childNodes.length > 0 && box9.childNodes.length > 0) {

        let box7Child = box7.childNodes[0].className;
        let box8Child = box8.childNodes[0].className;
        let box9Child = box9.childNodes[0].className;

        if(box7Child == "x" && box8Child == "x" && box9Child == "x") {
            // "x" venceu
            declareWinner("x");
        } else if(box7Child == "o" && box8Child == "o" && box9Child == "o") {
            // "o" venceu
            declareWinner("o");
        }

    }

    //Formas verticais
    if(box1.childNodes.length > 0 && box4.childNodes.length > 0 && box7.childNodes.length > 0) {

        let box1Child = box1.childNodes[0].className;
        let box4Child = box4.childNodes[0].className;
        let box7Child = box7.childNodes[0].className;

        if(box1Child == "x" && box4Child == "x" && box7Child == "x") {
            // "x" venceu
            declareWinner("x");
        } else if(box1Child == "o" && box4Child == "o" && box7Child == "o") {
            // "o" venceu
            declareWinner("o");
        }

    }

    if(box2.childNodes.length > 0 && box5.childNodes.length > 0 && box8.childNodes.length > 0) {

        let box2Child = box2.childNodes[0].className;
        let box5Child = box5.childNodes[0].className;
        let box8Child = box8.childNodes[0].className;

        if(box2Child == "x" && box5Child == "x" && box8Child == "x") {
            // "x" venceu
            declareWinner("x");
        } else if(box2Child == "o" && box5Child == "o" && box8Child == "o") {
            // "o" venceu
            declareWinner("o");
        }

    }

    if(box3.childNodes.length > 0 && box6.childNodes.length > 0 && box9.childNodes.length > 0) {

        let box3Child = box3.childNodes[0].className;
        let box6Child = box6.childNodes[0].className;
        let box9Child = box9.childNodes[0].className;

        if(box3Child == "x" && box6Child == "x" && box9Child == "x") {
            // "x" venceu
            declareWinner("x");
        } else if(box3Child == "o" && box6Child == "o" && box9Child == "o") {
            // "o" venceu
            declareWinner("o");
        }

    }

    //Linhas diagonais
    if(box1.childNodes.length > 0 && box5.childNodes.length > 0 && box9.childNodes.length > 0) {

        let box1Child = box1.childNodes[0].className;
        let box5Child = box5.childNodes[0].className;
        let box9Child = box9.childNodes[0].className;

        if(box1Child == "x" && box5Child == "x" && box9Child == "x") {
            // "x" venceu
            declareWinner("x");
        } else if(box1Child == "o" && box5Child == "o" && box9Child == "o") {
            // "o" venceu
            declareWinner("o");
        }

    }

    if(box3.childNodes.length > 0 && box5.childNodes.length > 0 && box7.childNodes.length > 0) {

        let box3Child = box3.childNodes[0].className;
        let box5Child = box5.childNodes[0].className;
        let box7Child = box7.childNodes[0].className;

        if(box3Child == "x" && box5Child == "x" && box7Child == "x") {
            // "x" venceu
            declareWinner("x");
        } else if(box3Child == "o" && box5Child == "o" && box7Child == "o") {
            // "o" venceu
            declareWinner("o");
        }

    }

    //Deu velha
    let counter = 0;

    for(let i = 0; i < boxes.length; i++) {

        if(boxes[i].childNodes[0] != undefined) {
            counter++;
        }

    }

    if(counter == 9) {
        declareWinner("Empate" + `<i class="fas fa-handshake"></i>`);
    }

}

// Limpa o jogo, declara o vencedor e atualiza o placar
function declareWinner(winner) {

    let scoreboardX = document.querySelector("#scoreboard-1");
    let scoreboardY = document.querySelector("#scoreboard-2");
    let msg = '';

    if(winner == "x") {
        scoreboardX.textContent = parseInt(scoreboardX.textContent) + 1;
        msg = "O jogador 1 venceu!" + ` <i class="fas fa-trophy"></i>`;
    } else if(winner == "o") {
        scoreboardY.textContent = parseInt(scoreboardY.textContent) + 1;
        msg = "O jogador 2 venceu" + ` <i class="fas fa-trophy"></i>`;
    } else {
        msg = "Empate!" + ` <i class="fas fa-handshake"></i>`;
    }

    // Exibe mensagem
    messageText.innerHTML = msg;
    messageContainer.classList.remove("hide");

    // Esconde msg
    setTimeout(function() {

        messageContainer.classList.add('hide');

    }, 3000);

    // Zera as jogadas
    player1 = 0;
    player2 = 0;

    // Remove "x" e "o"

    let boxesToRemove = document.querySelectorAll(".box div");

    for(let i = 0; i < boxesToRemove.length; i++) {

        boxesToRemove[i].parentNode.removeChild(boxesToRemove[i]);

    }
};

// Executar a lógica da jogada do CPU
function computerPlay() {

    let cloneO = o.cloneNode(true);
    counter = 0;
    filled = 0;

    // Só preencher se estiver vazio o filho
    for(let i = 0; i < boxes.length; i++) {

        let randomNumber = Math.floor(Math.random() * 5);

        if(boxes[i].childNodes[0] == undefined) {

            if(randomNumber <= 1) {
                boxes[i].appendChild(cloneO);
                counter++;
                break;
            }
        // Checagem de quantas estão preenchidas    
        } else {
            filled++;
        }

    }

    if(counter == 0 && filled < 9) {
        computerPlay();
    }

}

//Evento para saber se é 2 players ou IA
for(let i = 0; i < buttons.length; i++) {

    buttons[i].addEventListener("click", function() {
        
        secondPlayer = this.getAttribute("id");

        for(let j = 0; j < buttons.length; j++) {

            buttons[j].style.display = "none";

        }

        setTimeout(function() {

            let container = document.querySelector("#container");
            let back = document.querySelector("#back"); // add
            container.classList.remove("hide");
            back.classList.remove("hide"); // add

        }, 500)

    });

}

// Adicionando o evento de click aos boxes
for(let i = 0; i < boxes.length; i++) {

    // Quando o usuário clicar na caixa
    boxes[i].addEventListener("click", function() {

        let element = checkElement(player1, player2);

        // Verifica se já tem "x" ou "o"
        if(this.childNodes.length == 0) {
            let cloneElement = element.cloneNode(true);

            this.appendChild(cloneElement);

            // Computar jogada
            if(player1 == player2) {
                player1++;

                if(secondPlayer == "ai-player") {

                    // Função executar a jogada
                    computerPlay();
                    player2++;

                }

            } else {
                player2++;
            }

            // Checa quem venceu
            checkWinCondition();
        }

    });

}