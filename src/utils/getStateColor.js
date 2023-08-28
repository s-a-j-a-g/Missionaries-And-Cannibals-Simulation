const getStateColor = (state) => {
  if (state.level === 0) return "#FFB500";
  if (state.isRecursiveState) return "#a3a3a3";
  if (state.isDead) return "#FF0000";
  if (state.M === 0 && state.C === 0 && state.boat) return "green";
  return "#0094FF";
};

export default getStateColor;
