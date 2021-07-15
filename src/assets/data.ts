import Company, { ICompany } from "../types/Company";

const companies: ICompany[] = [
  {
    name: "Bouvet",
    logo: "bouvet.jpg",
    email: "recruiting@bouvet.no",
    address: "JÅTTÅÅÅÅvågen",
    website: "http://www.bouvet.no",
    contactPerson: {
      firstName: "Marthe",
      lastName: "Dybdahl",
      email: "m@bouvet.no",
      phone: "+47 958 888 888",
      title: "Konsulent",
    },
  },
];

export interface IData {
  companies: Company[];
}

const data: IData = {
  companies: companies.map(Company.fromInterface),
};

export default data;
