import styles from './ProjectsStyles.module.css';
import viberr from '../../assets/viberr.png';
import freshBurger from '../../assets/fresh-burger.png';
import hipsster from '../../assets/hipsster.png';
import fitLift from '../../assets/fitlift.png';
import ProjectCard from '../../components/ProjectCard';

function Projects() {
  return (
    <section id="projects" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      
      <h2 className="sectionTitle">WEB DEVELOPER</h2>
      <div className={styles.projectsContainer}>
        <ProjectCard
                  src={freshBurger}

          link="https://github.com/rajakanjali30/FoodEat"
          h3="FoodEat"
          p="Restraurant Landing Page"
        />
        <ProjectCard
                  src={viberr}

          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Bhutiya"
          p="Movie landing Page"
        />
        <ProjectCard
          src={hipsster}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="Hipsster"
          p="Glasses Shop"
        />
        <ProjectCard
          src={fitLift}
          link="https://github.com/Ade-mir/company-landing-page-2"
          h3="FitLift"
          p="Fitness App"
        />
      </div>
      
      
    </section>
  );
}

export default Projects;
