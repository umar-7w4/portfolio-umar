import { useContext, useEffect } from "react";
import { FiClock, FiTag } from "react-icons/fi";
import SingleProjectContext from "../../context/SingleProjectContext";
import { useParams } from "react-router-dom";

const ProjectSingleHeader = () => {
  const { singleProjectData } = useContext(SingleProjectContext);
  const { id } = useParams();

  return (
    <div>
      <p className="font-general-medium text-left text-3xl sm:text-4xl font-bold text-primary-dark dark:text-primary-light mt-14 sm:mt-20 mb-7">
        {singleProjectData[`${id}`].ProjectHeader.title}
      </p>
      <div className="flex">
        <div className="flex items-center mr-10">
          <FiClock className="text-lg text-ternary-dark dark:text-ternary-light" />
          <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
            {singleProjectData[`${id}`].ProjectHeader.publishDate}
          </span>
        </div>
        <div className="flex items-center">
          <FiTag className="text-lg text-ternary-dark dark:text-ternary-light" />
          <span className="font-general-regular ml-2 leading-none text-primary-dark dark:text-primary-light">
            {singleProjectData[`${id}`].ProjectHeader.tags}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProjectSingleHeader;
