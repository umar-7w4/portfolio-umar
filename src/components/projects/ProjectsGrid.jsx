import { useContext, useState } from "react";
import { FiSearch } from "react-icons/fi";
import ProjectSingle from "./ProjectSingle";
import { ProjectsContext } from "../../context/ProjectsContext";
import ProjectsFilter from "./ProjectsFilter";

const ProjectsGrid = () => {
  const {
    projects,
    setSearchProject,
    selectProject,
    setSelectProject,
    searchProjectsByTitle,
    selectProjectsByCategory,
  } = useContext(ProjectsContext);

  const [showAllProjects, setShowAllProjects] = useState(false);

  const projectsToDisplay = showAllProjects
    ? projects
    : projects.slice(0, 6); // Show only 6 projects initially

  const handleShowMore = () => {
    setShowAllProjects(true); // Show all projects when button is clicked
  };

  // Determine which projects to display based on search or filter
  const displayedProjects = selectProject
    ? selectProjectsByCategory
    : searchProjectsByTitle.length > 0
    ? searchProjectsByTitle
    : projectsToDisplay;

  return (
    <section className="py-5 sm:py-10 mt-5 sm:mt-10">
      <div className="text-center">
        <p className="font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light">
          Projects portfolio
        </p>
      </div>

      <div className="mt-10 sm:mt-16">
        <h3
          className="font-general-regular 
                        text-center text-secondary-dark
                        dark:text-ternary-light
                        text-md
                        sm:text-xl
                        mb-3
                        "
        >
          Search projects by title or filter by category
        </h3>
        <div
          className="
                        flex
                        justify-between
                        border-b border-primary-light
                        dark:border-secondary-dark
                        pb-3
                        gap-3
                        "
        >
          <div className="flex justify-between gap-2">
            <span
              className="hidden
                                sm:block
                                bg-primary-light
                                dark:bg-ternary-dark
                                p-2.5
                                shadow-sm
                                rounded-xl
                                cursor-pointer
                                "
            >
              <FiSearch className="text-ternary-dark dark:text-ternary-light w-5 h-5"></FiSearch>
            </span>
            <input
              onChange={(e) => {
                setSearchProject(e.target.value);
              }}
              className="font-general-medium 
                                pl-3
                                pr-1
                                sm:px-4
                                py-2
                                border 
                            border-gray-200
                                dark:border-secondary-dark
                                rounded-lg
                                text-sm
                                sm:text-md
                                bg-secondary-light
                                dark:bg-ternary-dark
                                text-primary-dark
                                dark:text-ternary-light
                                "
              id="name"
              name="name"
              type="search"
              required=""
              placeholder="Search Projects"
              aria-label="Name"
            />
          </div>

          <ProjectsFilter setSelectProject={setSelectProject} />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10">
        {displayedProjects.map((project) => (
          <ProjectSingle
            id={project.id}
            title={project.title}
            category={project.category}
            image={project.img}
            key={project.id}
          />
        ))}
      </div>

      {/* Button to show all projects */}
      {!showAllProjects && displayedProjects.length === 6 && (
        <div className="mt-8 sm:mt-10 flex justify-center">
          <button
            onClick={handleShowMore}
            className="font-general-medium flex items-center px-6 py-3 rounded-lg shadow-lg hover:shadow-xl bg-indigo-500 hover:bg-indigo-600 focus:ring-1 focus:ring-indigo-900 text-white text-lg sm:text-xl duration-300"
          >
            More Projects
          </button>
        </div>
      )}
    </section>
  );
};

export default ProjectsGrid;