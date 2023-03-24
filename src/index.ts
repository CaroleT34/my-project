interface Brick {
    color: string;
    addNewBrick: () => void;
  }
  
  const brickBlue: Brick = {
    color: 'blue',
    addNewBrick() {
      console.log(this.color);
    }
  };

  const newBrick: Brick = {
    color: "red",
    addNewBrick: () => {
      console.log(newBrick, "newBrick")
    }
  };
  
  function addNewBrick() {
    const brickDiv = document.getElementById("brick");
    const newSquare = document.createElement("div");
    newSquare.style.backgroundColor = "red";
    newSquare.style.width = "50px";
    newSquare.style.height = "50px";
    newSquare.style.margin = "5px";
    brickDiv.appendChild(newSquare);
  }

  
  const addNewBrickButton = document.getElementById("addNewBrickButton");
  addNewBrickButton.addEventListener("click", addNewBrick);