import ExperiencesGrid from '../components/experiences/ExperiencesGrid';
import { ExperiencesProvider } from '../context/ExperiencesContext';

const Experiences = () => {
	return (
		<ExperiencesProvider>
			<div className="container mx-auto">
				<ExperiencesGrid />
			</div>
		</ExperiencesProvider>
	);
};

export default Experiences;
