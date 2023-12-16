import { useContext } from "react";
import AboutMeContext from "../../context/AboutMeContext";
import AboutClientSingle from "./AboutClientSingle";

const AboutClients = () => {
  const { clientsData, clientsHeading } = useContext(AboutMeContext);

  return (
    <>
      <div className="mt-10 sm:mt-20">
        <p className="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light">
          Skills
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 mt-6 sm:mt-14">
          {clientsData
            .filter((item) => item.title === "skill")
            .map((client) => (
              <AboutClientSingle
                title={client.title}
                image={client.img}
                key={client.id}
              />
            ))}
        </div>
      </div>
      <div className="mt-10 sm:mt-20">
        <p className="font-general-medium text-2xl sm:text-3xl text-primary-dark dark:text-primary-light">
          Certifications
        </p>
        <div className="grid grid-cols-2 sm:grid-cols-4 mt-6 sm:mt-14">
          {clientsData
            .filter((item) => item.title === "certificate")
            .map((client) => (
              <AboutClientSingle
                title={client.title}
                image={client.img}
                key={client.id}
              />
            ))}
        </div>
      </div>
    </>
  );
};

export default AboutClients;
