import { useLocation } from "react-router-dom";
import CompanyList, { ICompanyFilterState } from "../components/CompanyList";

const Companies = () => {
  const location = useLocation();

  if (location.state) {
    return <CompanyList filterState={location.state as ICompanyFilterState} />;
  }

  return <CompanyList />;
};

export default Companies;
