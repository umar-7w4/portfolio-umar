import React from "react";
import AboutClients from "../components/about/AboutClients";
import { motion } from "framer-motion";
import { AboutMeProvider } from "../context/AboutMeContext";

function Skills() {
  return (
    <AboutMeProvider>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, delay: 1 }}
        exit={{ opacity: 0 }}
        className="container mx-auto"
      >
        <AboutClients />
      </motion.div>
    </AboutMeProvider>
  );
}

export default Skills;
