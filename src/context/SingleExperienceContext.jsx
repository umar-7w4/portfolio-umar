import { useState, createContext } from "react";
import { singleExperienceData as singleExperienceDataJson } from "../data/singleExperienceData";

const SingleExperienceContext = createContext();

export const SingleExperienceProvider = ({ children }) => {
  const [singleExperienceData, setSingleExperienceData] = useState(
    singleExperienceDataJson
  );

  return (
    <SingleExperienceContext.Provider
      value={{ singleExperienceData, setSingleExperienceData }}
    >
      {children}
    </SingleExperienceContext.Provider>
  );
};

export default SingleExperienceContext;
