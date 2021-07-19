import JobType from "../types/enums/JobType";
import Level from "../types/enums/Level";
import {
  BachelorStudyProgram,
  MasterStudyProgram,
} from "../types/enums/StudyProgram";

export const translateDriveImageLink = (image: string): string => {
  const id = image.replace("https://drive.google.com/open?id=", "");
  return `https://www.googleapis.com/drive/v2/files/${id}?key=${process.env.REACT_APP_SHEETS_API_KEY}&alt=media`;
};

const stringJobTypeMap = {
  Sommerjobb: JobType.SummerInternship,
  Deltidsjobb: JobType.PartTime,
  Fulltid: JobType.FullTime,
  "Graduate program": JobType.GraduateProgram,
};

export const parseStringToJobTypes = (s: string): JobType[] => {
  if (!s) return [];

  const jobTypes = s.split(",").map((j) => j.trim());
  return jobTypes.map(
    (j) =>
      stringJobTypeMap[
        j as "Sommerjobb" | "Deltidsjobb" | "Fulltid" | "Graduate program"
      ]
  );
};

const stringLevelMap = {
  Første: Level.First,
  Andre: Level.Second,
  Tredje: Level.Third,
  Fjerde: Level.Fourth,
  Femte: Level.Fifth,
};
export const parseStringToLevels = (s: string): Level[] => {
  if (!s) return [];

  const levels = s.split(",").map((l) => l.trim());
  return levels.map(
    (l) =>
      stringLevelMap[
        l.split(" ")[0] as "Første" | "Andre" | "Tredje" | "Fjerde" | "Femte"
      ]
  );
};

const stringMasterMap = {
  Data: MasterStudyProgram.DataScience,
  Datateknologi: MasterStudyProgram.ComputerScience,
  Applied: MasterStudyProgram.AppliedDataScience,
  Robotteknologi: MasterStudyProgram.RoboticsAndSignalProcessing,
};

export const parseStringToMasters = (s: string): MasterStudyProgram[] => {
  if (!s) return [];

  const programs = s.split(",").map((l) => l.trim());
  return programs.map(
    (p) =>
      stringMasterMap[
        p.split(" ")[0] as
          | "Data"
          | "Datateknologi"
          | "Applied"
          | "Robotteknologi"
      ]
  );
};

const stringBachelorMap = {
  Datateknologi: BachelorStudyProgram.ComputerScience,
  Automatisering: BachelorStudyProgram.AutomationAndElectronics,
};

export const parseStringToBachelors = (s: string): BachelorStudyProgram[] => {
  if (!s) return [];

  const programs = s.split(",").map((l) => l.trim());
  return programs.map(
    (p) =>
      stringBachelorMap[p.split(" ")[0] as "Datateknologi" | "Automatisering"]
  );
};

export const formatWebsiteLink = (website: string): string => {
  if (website.startsWith("http")) {
    return website;
  }
  return `http://${website}`;
};
