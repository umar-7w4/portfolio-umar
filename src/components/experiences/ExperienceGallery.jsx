import { useContext } from "react";
import SingleExperienceContext from "../../context/SingleExperienceContext.jsx";
import { useParams } from "react-router-dom";

const ExperienceGallery = () => {
  const { singleExperienceData } = useContext(SingleExperienceContext);
  const { id } = useParams();

  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 sm:gap-10 mt-12">
      {singleExperienceData[`${id}`].ExperienceImages?.map((experience) => {
        return (
          <div className="mb-10 sm:mb-0" key={experience.id}>
            <img
              src={experience.img}
              className="rounded-xl cursor-pointer shadow-lg sm:shadow-none"
              alt={experience.title}
              key={experience.id}
            />
          </div>
        );
      })}
    </div>
  );
};

export default ExperienceGallery;
