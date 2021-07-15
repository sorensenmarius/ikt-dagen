enum Level {
  First = 1,
  Second = 2,
  Third = 3,
  Fourth = 4,
  Fifth = 5,
}

export default Level;

export const getNorwegianLevelName = (level: Level): string => {
  return {
    1: "Første",
    2: "Andre",
    3: "Tredje",
    4: "Fjerde",
    5: "Femte",
  }[level];
};
