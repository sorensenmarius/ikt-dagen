enum JobType {
  SummerInternship = 1,
  PartTime = 2,
  FullTime = 3,
  GraduateProgram = 4,
}

export default JobType;

export const getNorwegianJobType = (jobType: JobType): string => {
  return {
    1: "Sommerjobb",
    2: "Deltid",
    3: "Fulltid",
    4: "Graduate",
  }[jobType];
};
