import { useLocation } from "react-router-dom";
import CompanyList from "../components/CompanyList";

const Companies = () => {
  const location = useLocation();
  console.log(location.state);
  console.log("hallo??");

  return <CompanyList />;
};

export default Companies;
