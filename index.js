// function makePlayer() {
//   return {
//     name: prompt("Type in name for player"),
//     shipCount: 4,
//     gameBoard: [
//       [0, 0, 0, 0],
//       [0, 0, 0, 0],
//       [0, 0, 0, 0],
//       [0, 0, 0, 0],
//     ],
//     strike: (Player) => {
//       if (Player.shipCount === 0) {
//         alert(this.name + " Wins");
//       } else {
//         const x = prompt("Strike x coord:");
//         const y = prompt("Strike y coord:");

//         if (this.gameBoard[x][y] === 1 && Player.shipCount > 0) {
//           Player.shipCount -= 1;
//           alert("You Hit!!");
//           this.gameBoard[x][y] = 0;
//         } else {
//           alert("You miss ☹️");
//         }
//       }
//     },
//   };
// }

// function addShips(player) {
//   let shipPlaced = 0;

//   while (shipPlaced < 4) {
//     let xPos = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
//     let yPos = Math.floor(Math.random() * (3 - 0 + 1)) + 0;
//     console.log(xPos, yPos);

//     if (player.gameBoard[xPos][yPos] === 0) {
//       player.gameBoard[xPos][yPos] = 1;
//       shipPlaced += 1;
//     }
//   }
//   console.log(player);
// }

// const battleship = () => {
//   let player1 = makePlayer();

//   let player2 = makePlayer();

//   addShips(player1);
//   addShips(player2);

//   // name: prompt("type in name for player 2");

//   return {
//     player1,
//     player2,
//   };
// };

// const gameResult = battleship();

// console.log(gameResult);

// const htmlTarget = document.getElementById("result");
// htmlTarget.innerHTML = gameResult;

function Player() {
  return {
    name: "",
    shipCount: 4,
    gameBoard: [],

    init(num) {
      this.setName(num);
      this.addShips();
    },

    setName(num) {
      this.name = prompt(`Player ${num} Name: `);
    },

    addShips() {
      const board = [
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
        [0, 0, 0, 0],
      ];

      this.gameBoard = board;
      let shipPlaced = 0;
      while (shipPlaced < 4) {
        let xPos = Math.floor(Math.random() * 3 + 1);
        let yPos = Math.floor(Math.random() * 3 + 1);

        if (this.gameBoard[xPos][yPos] === 0) {
          this.gameBoard[xPos][yPos] = 1;
          shipPlaced += 1;
        }
      }
    },

    strike(Player) {
      if (Player.shipCount === 0) {
        alert(this.name + " Wins");
      } else {
        const x = prompt("Strike x coord:");
        const y = prompt("Strike y coord:");

        if (this.gameBoard[x][y] === 1 && Player.shipCount > 0) {
          Player.shipCount -= 1;
          alert("You Hit!!");
          this.gameBoard[x][y] = 0;
          return true;
        } else {
          alert("You miss ☹️");
          return false;
        }
      }
    },
  };
}

const player1 = new Player();
const player2 = new Player();

player1.init(1);
player2.init(2);
