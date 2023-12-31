const createNewState = (oldState, transition, childIndex, state) => {
  const newState = {
    ...oldState,
    transition: transition,
    id: `${state.id}${childIndex}`,
    parentId: `${state.id}`,
  };

  return newState;
};
export default createNewState;
