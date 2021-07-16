import JobType from "../types/enums/JobType";
import Level from "../types/enums/Level";

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
  const levels = s.split(",").map((l) => l.trim());
  return levels.map(
    (l) =>
      stringLevelMap[
        l.split(" ")[0] as "Første" | "Andre" | "Tredje" | "Fjerde" | "Femte"
      ]
  );
};

export const formatWebsiteLink = (website: string): string => {
  if (website.startsWith("http")) {
    return website;
  }
  return `http://${website}`;
};
