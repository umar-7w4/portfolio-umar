import { useContext, useEffect } from "react";
import { FiClock, FiTag } from "react-icons/fi";
import SingleExperienceContext from "../../context/SingleExperienceContext.jsx";
import { useParams } from "react-router-dom";

const ExperienceSingleHeader = () => {
  const { singleExperienceData } = useContext(SingleExperienceContext);
  const { id } = useParams();

  return (
    <div>
      <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
        {singleExperienceData[`${id}`].ExperienceHeader.title}
      </p>
      <div className="flex">
        <div className="flex items-center mr-10">
          <FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
          <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
            {singleExperienceData[`${id}`].ExperienceHeader.publishDate}
          </span>
        </div>
        <div className="flex items-center">
          <FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
          <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
            {singleExperienceData[`${id}`].ExperienceHeader.tags}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ExperienceSingleHeader;
