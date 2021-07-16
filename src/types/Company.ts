import { translateDriveImageLink } from "../utils/sheetUtils";

export default class Company {
  constructor(
    public name: string,
    public address: string,
    public email: string,
    public website: string,
    public logo: string
  ) {}

  static fromSheets(info: string[]): Company {
    return new Company(
      info[0],
      info[1],
      info[2],
      info[3],
      translateDriveImageLink(info[4])
    );
  }
}
