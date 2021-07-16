import {
  formatWebsiteLink,
  parseStringToJobTypes,
  parseStringToLevels,
  translateDriveImageLink,
} from "../utils/sheetUtils";
import JobType from "./enums/JobType";
import Level from "./enums/Level";

export default class Company {
  constructor(
    public name: string,
    public address: string,
    public email: string,
    public website: string,
    public logo: string,
    public jobTypes: JobType[] = [],
    public levels: Level[] = []
  ) {}

  static fromSheets(info: string[]): Company {
    return new Company(
      info[0],
      info[1],
      info[2],
      formatWebsiteLink(info[3]),
      translateDriveImageLink(info[4]),
      parseStringToJobTypes(info[5]),
      parseStringToLevels(info[6])
    );
  }
}
