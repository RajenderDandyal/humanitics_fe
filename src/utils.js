export function findState(atdState, number) {
  return atdState?.find((item) => item.number === number).state;
}
