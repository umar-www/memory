const resetBtn = document.getElementById("btn");
const board = document.getElementById("board");
const box = document.querySelectorAll(".box");
const lose = document.getElementById("lose");
const count = document.getElementById("count");

let itemsRand = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  .sort(() => Math.random() - 0.5)
  .slice(10);

let arr = [];
let item;
let counter = 0;
let winner = 0;
let win = true;

//  BOXTEXT FUNCTION
function boxText() {
  item = randItem();
  item.forEach((elm) => {
    elm.classList.add("show");
    console.log(elm);
  });

  setTimeout(() => {
    item.forEach((e) => {
      e.classList.replace("show", "notshow");
    });
  }, 2000);
}
boxText();

//  RANDOM FUNCTION
function randItem() {
  for (let i of itemsRand) {
    arr.push(document.querySelector(`.box${i}`));
  }
  // console.log(arr);
  return arr;
}

//  GAME FUNCTIONS
function game() {
  box.forEach((item) => {
    item.addEventListener("click", () => {
      counter++;
      count.textContent = counter;
      console.log(counter);

      if (item.classList.contains("notshow")) {
        item.classList.add("show");
        if (counter == 6) {
          lose.textContent = "YOU WIN🤩";
        }
      } else {
        item.classList.add("wrong");
        lose.textContent = "YOU LOSE😂";
        box.forEach((item) => {
          if (item.classList.contains("notshow")) {
            item.classList.add("show");
          }
          item.style.pointerEvents = "none";
        });
      }
    });
  });
}

// RESET FUNCTION
function reset() {
  resetBtn.addEventListener("click", () => {
    // lose.textContent = "GAME STARTING🏃🏼...";
    // itemsRand = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
    //   .sort(() => Math.random() - 0.5)
    //   .slice(10);
    // arr = [];

    // setTimeout(()=>{
    //   boxText();

    // })
    // counter = 0;
    // count.textContent = counter;

    // box.forEach((item) => {
    //   item.style.pointerEvents = "all";
    //   if (item.classList.contains("notshow")) {
    //     item.classList.toggle("show");
    //   } else if (item.classList.contains("wrong")) {
    //     item.classList.toggle("wrong");
    //   }
    // });

      window.location.reload();
  });
}
reset();
