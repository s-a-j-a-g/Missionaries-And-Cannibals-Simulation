export const isConstraintStatisfied = (state) => {
  if (
    state.M >= 0 &&
    state.M <= 3 &&
    state.C >= 0 &&
    state.C <= 3 &&
    (state.M === 0 ||
      3 - state.M === 0 ||
      (state.M >= state.C && 3 - state.M >= 3 - state.C))
  ) {
    return true;
  } else return false;
};

export const isValidState = (state) => {
  if (state.M >= 0 && state.M <= 3 && state.C >= 0 && state.C <= 3) {
    return true;
  } else return false;
};
