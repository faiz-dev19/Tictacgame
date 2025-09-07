let boxes = document.querySelectorAll(".box");
let resetBtn = document.querySelector("#rst-btn");
let msgContain = document.querySelector(".msg-contain");
let msg = document.querySelector("#msg");
let newGame = document.querySelector("#new-btn")

let turnO = true;

const winPatterns = [
        [0,1,2],
        [0,3,6],
        [0,4,8],
        [1,4,7],
        [2,5,8],
        [2,4,6],
        [3,4,5],
        [6,7,8],
];

const resetGame = () => {
turnO = true;
boxDEnable()
msgContain.classList.add("hide");
}


boxes.forEach((box) => { 
  box.addEventListener("click",() =>{
    if(turnO){
      // box.innerHTML =`<p style="color:black;">O</p>`;
      box.innerText = "O";
      box.style.color = "green";
      // box.style.color = false;
      turnO = false;
    }
    else{
      box.innerText = "X";
      box.style.color = "red";
      turnO = true;
    }
    box.disabled = true;
    checkWinner();
  });
});

const boxDEnable = () => {
  for( let box of boxes){
    box.disabled = false;
     box.innerText = ""; 
  }
}

const boxDesable = () => {
  for( let box of boxes){
    box.disabled = true;
  }
}


const showWinner = (winner) => {
     msg.innerText = `Congratulations, Winner is ${winner}`;
     msgContain.classList.remove("hide");
     boxDesable();
}

let checkWinner = () => {
  for(pattern of winPatterns){
    let pos1Val = boxes[pattern[0]].innerText;
    let pos2Val = boxes[pattern[1]].innerText;
    let pos3Val = boxes[pattern[2]].innerText;

    if(pos1Val != "" && pos2Val != "" && pos3Val != ""){
      if(pos1Val === pos2Val && pos2Val === pos3Val){
        showWinner(pos1Val);
      }
    }
  }
}

newGame.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);
 