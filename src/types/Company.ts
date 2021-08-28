import {
  formatWebsiteLink,
  parseStringToBachelors,
  parseStringToJobTypes,
  parseStringToLevels,
  parseStringToMasters,
  translateDriveImageLink,
} from "../utils/sheetUtils";
import JobType from "./enums/JobType";
import Level from "./enums/Level";
import { BachelorStudyProgram, MasterStudyProgram } from "./enums/StudyProgram";

export default class Company {
  constructor(
    public name: string,
    public address: string,
    public email: string,
    public website: string,
    public logo: string,
    public jobTypes: JobType[] = [],
    public levels: Level[] = [],
    public bachelorStudyPrograms: BachelorStudyProgram[] = [],
    public masterStudyPrograms: MasterStudyProgram[] = [],
    public description: string
  ) {}

  static fromSheets(info: string[]): Company {
    return new Company(
      info[0],
      info[1],
      info[2],
      formatWebsiteLink(info[3]),
      translateDriveImageLink(info[4]),
      parseStringToJobTypes(info[5]),
      parseStringToLevels(info[6]),
      parseStringToBachelors(info[7]),
      parseStringToMasters(info[8]),
      info[9]
    );
  }

  hasElectroMaster = this.masterStudyPrograms.includes(
    MasterStudyProgram.RoboticsAndSignalProcessing
  );
  hasDataMaster = this.masterStudyPrograms.some((el) =>
    [
      MasterStudyProgram.AppliedDataScience,
      MasterStudyProgram.ComputerScience,
      MasterStudyProgram.DataScience,
    ].includes(el)
  );
  hasElectroBachelor = this.bachelorStudyPrograms.includes(
    BachelorStudyProgram.AutomationAndElectronics
  );
  hasDataBachelor = this.bachelorStudyPrograms.includes(
    BachelorStudyProgram.ComputerScience
  );
}
