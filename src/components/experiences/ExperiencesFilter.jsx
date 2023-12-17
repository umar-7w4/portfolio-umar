const selectOptions = [
	'Graduate Teaching Assistant',
	'Internship',
	'Full-Time',
	'Open-Source Contribution',
    'Part-time'
];

const ExperiencesFilter = ({ setSelectExperience }) => {
	return (
		<select
			onChange={(e) => {
				setSelectExperience(e.target.value);
			}}
			className="font-general-medium 
                px-4
                sm:px-6
                py-2
                border
                dark:border-secondary-dark
                rounded-lg
                text-sm
                sm:text-md
                dark:font-medium
                bg-secondary-light
                dark:bg-ternary-dark
                text-primary-dark
                dark:text-ternary-light
            "
		>
			<option value={setSelectExperience} className="text-sm sm:text-md">
				All Experiences
			</option>

			{selectOptions.map((option) => (
				<option className="text-normal sm:text-md" key={option}>
					{option}
				</option>
			))}
		</select>
	);
};

export default ExperiencesFilter;
