import { useParams } from "react-router-dom";
import ExperienceGallery from "../components/experiences/ExperienceGallery";
import ExperienceHeader from "../components/experiences/ExperienceHeader";
import ExperienceInfo from "../components/experiences/ExperienceInfo";
import ExperienceRelatedExperiences from "../components/experiences/ExperienceRelatedExperiences";
import { SingleExperienceProvider } from "../context/SingleExperienceContext";
import { motion } from "framer-motion";

const ExperienceSingle = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1, delay: 1 }}
      transition={{
        ease: "easeInOut",
        duration: 0.6,
        delay: 0.15,
      }}
      className="container mx-auto mt-5 sm:mt-10"
    >
      <SingleExperienceProvider>
        <ExperienceHeader />
        <ExperienceGallery />
        <ExperienceInfo />
      </SingleExperienceProvider>
    </motion.div>
  );
};

export default ExperienceSingle;
