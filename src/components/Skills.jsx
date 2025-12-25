const skills = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Responsive Design",
  "UI / UX Basics"
];

export default function Skills() {
  return (
    <section id="skills">
      <h2>Skills</h2>

      <div className="skill-grid">
        {skills.map(skill => (
          <div key={skill} className="skill-card">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
