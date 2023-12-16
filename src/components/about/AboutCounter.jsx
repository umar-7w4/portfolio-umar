import { useCountUp } from "react-countup";
import CounterItem from "./CounterItem";

const AboutCounter = () => {
  useCountUp({ ref: "experienceCounter", end: 3, duration: 2 });
  useCountUp({ ref: "interns", end: 3, duration: 2 });
  useCountUp({ ref: "githubStarsCounter", end: 20, duration: 2 });
  useCountUp({ ref: "feedbackCounter", end: 97, duration: 2 });
  useCountUp({ ref: "projectsCounter", end: 20, duration: 2 });

  return (
    <div className="mt-10 sm:mt-20 bg-primary-light dark:bg-ternary-dark shadow-sm">
      <div className="font-general-medium container mx-auto py-20 block sm:flex sm:justify-between items-center">
          <CounterItem
          title="Internships completed"
          counter={<span id="interns" />}
          measurement="+"
        />
        <CounterItem
          title="Years of experience"
          counter={<span id="experienceCounter" />}
          measurement=""
        />
        <CounterItem
          title="Positive feedback from clients"
          counter={<span id="feedbackCounter" />}
          measurement="%"
        />

        <CounterItem
          title="Projects completed including freelancing"
          counter={<span id="projectsCounter" />}
          measurement="+"
        />
      </div>
    </div>
  );
};

export default AboutCounter;
