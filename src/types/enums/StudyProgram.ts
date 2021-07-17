export enum BachelorStudyProgram {
  ComputerScience = 1,
  AutomationAndElectronics = 2,
}

export enum MasterStudyProgram {
  ComputerScience = 1,
  DataScience = 2,
  AppliedDataScience = 3,
  RoboticsAndSignalProcessing = 4,
}

export const getNorwegianBachelorStudyProgram = (
  studyProgram: BachelorStudyProgram
): string => {
  switch (studyProgram) {
    case BachelorStudyProgram.ComputerScience:
      return "Datateknologi";
    case BachelorStudyProgram.AutomationAndElectronics:
      return "Automatisering og elektronikkdesign";
  }
};

export const getNorwegianMasterStudyProgram = (
  studyProgram: MasterStudyProgram
): string => {
  switch (studyProgram) {
    case MasterStudyProgram.ComputerScience:
      return "Datateknologi";
    case MasterStudyProgram.DataScience:
      return "Data Science";
    case MasterStudyProgram.AppliedDataScience:
      return "Applied Data Science";
    case MasterStudyProgram.RoboticsAndSignalProcessing:
      return "Robotteknologi og signalbehandling";
  }
};
