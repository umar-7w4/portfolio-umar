import { useState, createContext } from 'react';
import { experiencesData } from '../data/experiences';


// Create experiences context
export const ExperiencesContext = createContext();

// Create the experiences context provider
export const ExperiencesProvider = (props) => {
	const [experiences, setExperiences] = useState(experiencesData);

	const [searchExperience, setSearchExperience] = useState('');
	const [selectExperience, setSelectExperience] = useState('');

	// Search experiences by experience title
	const searchExperiencesByTitle = experiences.filter((item) => {
		const result = item.title
			.toLowerCase()
			.includes(searchExperience.toLowerCase())
			? item
			: searchExperience === ''
			? item
			: '';
		return result;
	});

	// Select experiences by experience category
	const selectExperiencesByCategory = experiences.filter((item) => {
		let category =
			item.category.charAt(0).toUpperCase() + item.category.slice(1);
		return category.includes(selectExperience);
	});

	return (
		<ExperiencesContext.Provider
			value={{
				experiences,
				setExperiences,
				searchExperience,
				setSearchExperience,
				searchExperiencesByTitle,
				selectExperience,
				setSelectExperience,
				selectExperiencesByCategory,
			}}
		>
			{props.children}
		</ExperiencesContext.Provider>
	);
};
