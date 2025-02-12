import PropTypes from 'prop-types';

function SkillList({ src, skill }) {
  return (
    <span>
      <img src={src} alt="Checkmark icon" />
      <p>{skill}</p>
    </span>
  );
}

// ✅ Define PropTypes to fix ESLint warning
SkillList.propTypes = {
  src: PropTypes.string.isRequired,
  skill: PropTypes.string.isRequired,
};

// ✅ Export SkillList as default and ProjectCard as named export
export default SkillList;

export function ProjectCard({ title, description }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
}

// ✅ Define PropTypes for ProjectCard
ProjectCard.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};
