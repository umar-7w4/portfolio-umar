import { useState } from "react";
import { FiMoon, FiSun } from "react-icons/fi";
import { Link } from "react-router-dom";
import useThemeSwitcher from "../../hooks/useThemeSwitcher";
import HireMeModal from "../HireMeModal";
import { motion } from "framer-motion";
import Button from "../reusable/Button";

const AppHeader = () => {
  const [activeTheme, setTheme] = useThemeSwitcher();
  const [showModal, setShowModal] = useState(false);

  function showHireMeModal() {
    setShowModal(!showModal);
    const htmlElement = document.getElementsByTagName("html")[0];
    showModal
      ? htmlElement.classList.remove("overflow-y-hidden")
      : htmlElement.classList.add("overflow-y-hidden");
  }

  const toggleTheme = () => {
    setTheme(activeTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      id="nav"
      className="sm:container sm:mx-auto"
    >
      <div className="z-10 max-w-screen-lg xl:max-w-screen-xl block sm:flex sm:justify-between sm:items-center py-6">
        {/* Header menu links and small screen hamburger menu */}
        <div className="flex justify-between items-center px-4 sm:px-0">
          <div>

            <div
              style={{
                fontStyle: "bold",
                fontWeight: "500",
                fontSize: "24px",
                cursor: "pointer",
                color: activeTheme === "dark" ? "black" : "white",
              }}
            >
              <Link to="/">Umar Mohammad</Link>
            </div>
          </div>
          <div onClick={() => setTheme(activeTheme)} aria-label="Theme Switcher" className="p-3 cursor-pointer">
            {activeTheme === "dark" ? (
              <FiMoon className="text-ternary-dark hover:text-gray-400 dark:text-ternary-light dark:hover:text-primary-light text-xl" />
            ) : (
              <FiSun className="text-gray-200 hover:text-gray-50 text-xl" />
            )}
          </div>
        </div>

        {/* Navigation Links */}
        <div className="font-general-medium flex justify-center items-center gap-4">
          <Link to="/about" className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2">About Me</Link>
          <Link to="/experiences" className="block text-left text-lg text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light  sm:mx-4 mb-2 sm:py-2">Experiences</Link>
          <Link to="/projects" className="block text-left text-xl font text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2">Projects</Link>
          <Link to="/skills&certifications" className="block text-left text-xl font text-primary-dark dark:text-ternary-light hover:text-secondary-dark dark:hover:text-secondary-light sm:mx-4 mb-2 sm:py-2">Skills</Link>
        </div>
      </div>

      {/* Hire Me Modal */}
      {showModal && (
        <HireMeModal onClose={showHireMeModal} onRequest={showHireMeModal} />
      )}
    </motion.nav>
  );
};

export default AppHeader;
