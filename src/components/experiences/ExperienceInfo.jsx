import { useContext } from "react";
import SingleExperienceContext from "../../context/SingleExperienceContext.jsx";
import { useParams } from "react-router-dom";

const ExperienceInfo = () => {
  const { singleExperienceData } = useContext(SingleExperienceContext);
  const { id } = useParams();

  return (
    <div className="block sm:flex gap-0 sm:gap-10 mt-14">
      <div className="w-full sm:w-1/3 text-left">
        {/* Single experience client details */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-secondary-dark dark:text-secondary-light mb-2">
            {singleExperienceData[`${id}`].ExperienceInfo.ClientHeading}
          </p>
          <ul className="leading-loose">
            {singleExperienceData[`${id}`].ExperienceInfo.CompanyInfo.map((info) => {
              return (
                <li
                  className="font-general-regular text-ternary-dark dark:text-ternary-light"
                  key={info.id}
                >
                  <span>{info.title}: </span>
                  <a
                    href={info.details}
                    className={
                      info.title === "Website" || info.title === "Phone"
                        ? "hover:underline hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer duration-300"
                        : ""
                    }
                    aria-label="Experience Website and Phone"
                  >
                    {info.details}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>

        {/* Single experience objectives */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {singleExperienceData[`${id}`].ExperienceInfo.ObjectivesHeading}
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {singleExperienceData[`${id}`].ExperienceInfo.ObjectivesDetails}
          </p>
        </div>

        {/* Single experience technologies */}
        <div className="mb-7">
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {singleExperienceData[`${id}`].ExperienceInfo.Technologies[0].title}
          </p>
          <p className="font-general-regular text-primary-dark dark:text-ternary-light">
            {singleExperienceData[`${id}`].ExperienceInfo.Technologies[0].techs.join(
              ", "
            )}
          </p>
        </div>

        {/* Single experience social sharing */}
        <div>
          <p className="font-general-regular text-2xl font-semibold text-ternary-dark dark:text-ternary-light mb-2">
            {singleExperienceData[`${id}`].ExperienceInfo.SocialSharingHeading}
          </p>
          <div className="flex items-center gap-3 mt-5">
            {singleExperienceData[`${id}`].ExperienceInfo.SocialSharing.map(
              (social) => {
                return (
                  <a
                    key={social.id}
                    href={social.url}
                    target="__blank"
                    aria-label="Share Experience"
                    className="bg-ternary-light dark:bg-ternary-dark text-gray-400 hover:text-primary-dark dark:hover:text-primary-light p-2 rounded-lg shadow-sm duration-500"
                  >
                    <span className="text-lg lg:text-2xl">{social.icon}</span>
                  </a>
                );
              }
            )}
          </div>
        </div>
      </div>

      {/*  Single experience right section */}
      <div className="w-full sm:w-2/3 text-left mt-10 sm:mt-0">
        <p className="font-general-regular text-primary-dark dark:text-primary-light text-2xl font-bold mb-7">
          {singleExperienceData[`${id}`].ExperienceInfo.ExperienceDetailsHeading}
        </p>
        {singleExperienceData[`${id}`].ExperienceInfo.ExperienceDetails.map(
          (details) => {
            return (
              <p
                key={details.id}
                className="font-general-regular mb-5 text-lg text-ternary-dark dark:text-ternary-light"
              >
                {details.details}
              </p>
            );
          }
        )}
      </div>
    </div>
  );
};

export default ExperienceInfo;
