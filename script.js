const generateDoorNumber = () => {
  return Math.floor(Math.random() * 3);
};

const generateDoors = () => {
  // 0 - goat, 1 - car, 2 - door opened
  const doors = [0, 0, 0];
  const doorNumberWithCar = generateDoorNumber();
  doors[doorNumberWithCar] = 1;
  return doors;
};

const chooseDoor = () => {
  const chosenDoor = generateDoorNumber();
  return chosenDoor;
};

const openDoorWithGoat = (doors, playerChosenDoor) => {
  let doorCanBeOpened = false;
  let doorToOpen = generateDoorNumber();
  while (!doorCanBeOpened) {
    if (doors[doorToOpen] !== 1 && doorToOpen !== playerChosenDoor) {
      doors[doorToOpen] = 2;
      doorCanBeOpened = true;
    } else {
      doorToOpen = generateDoorNumber();
    }
  }

  return doorToOpen;
};

const stayOnChosenDoor = (playerChosenDoor) => {
  return playerChosenDoor;
};

const changeChosenDoor = (doors, playerChosenDoor) => {
  let doorCanBeChanged = false;
  let doorToChange = generateDoorNumber();
  while (!doorCanBeChanged) {
    if (doors[doorToChange] !== 2 && doorToChange !== playerChosenDoor) {
      doorCanBeChanged = true;
    } else {
      doorToChange = generateDoorNumber();
    }
  }

  return doorToChange;
};

const compareWinProbability = (doorStayed, doorChanged) => {};

const startGame = (attempts) => {
  let stayDoorWin = 0;
  let stayDoorLose = 0;

  for (let i = 0; i < attempts; i++) {
    const generatedDoors = generateDoors();
    const playerChosenDoor = chooseDoor();
    const doorWithGoat = openDoorWithGoat(generatedDoors, playerChosenDoor);
    generatedDoors[doorWithGoat] = 2;
    const doorStayed = stayOnChosenDoor(playerChosenDoor);
    if (generatedDoors[doorStayed] === 1) {
      stayDoorWin++;
    } else {
      stayDoorLose++;
    }
  }

  let winChance = stayDoorWin / (attempts / 100);
  let loseChance = stayDoorLose / (attempts / 100);
  console.log("stay on door win probability: ", winChance);
  console.log("stay on door lose probability: ", loseChance);
};

const attempts = 100000;
startGame(attempts);
