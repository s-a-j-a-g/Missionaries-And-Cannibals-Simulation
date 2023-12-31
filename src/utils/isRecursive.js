const isRecursive = (stateToCheck, currentArray, stateArray) => {
  for (const state of stateArray) {
    for (const item of state) {
      if (
        item.M === stateToCheck.M &&
        item.C === stateToCheck.C &&
        item.boat === stateToCheck.boat
      ) {
        return true;
      }
    }
  }

  for (const item of currentArray) {
    if (
      item.M === stateToCheck.M &&
      item.C === stateToCheck.C &&
      item.boat === stateToCheck.boat
    ) {
      return true;
    }
  }

  return false;
};

export default isRecursive;
