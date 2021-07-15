import { ContactPerson } from "./ContactPerson";

export default class Company {
  constructor(
    public name: string,
    public address: string,
    public email: string,
    public website: string,
    public logo: string,
    public contactPerson: ContactPerson
  ) {}

  getLogoLink(): string {
    return "/images/" + this.logo;
  }

  static fromInterface(c: ICompany): Company {
    return new Company(
      c.name,
      c.address,
      c.email,
      c.website,
      c.logo,
      c.contactPerson
    );
  }
}

export interface ICompany {
  name: string;
  address: string;
  email: string;
  website: string;
  logo: string;
  contactPerson: ContactPerson;
}
