import styles from "./projects.module.css";

export default function Projects() {
  return (
    <section className={styles.projects}>
      <div className={styles.container}>
        {/* LABEL */}
        <div className={styles.label}>OTHER PROJECTS</div>

        {/* CONTENT */}
        <div className={styles.list}>
          <Project
            title="Surf Videos"
            description="Small React project created during an interview process to browse and search surf videos via the YouTube API."
            tech={["JavaScript", "React", "React Router", "Axios", "YouTube API"]}
          />

          <Project
            title="Halcyon Theme"
            description="A minimal, dark theme for Sublime Text, Atom, VS Code, and more published to Package Control, Atom Package Manager, Visual Studio Marketplace, and NPM."
            tech={["Gatsby", "Sublime Text", "Atom", "VS Code", "iTerm2", "Hyper"]}
          />

          <Project
            title="Lonely Planet DBMS"
            description="Final project for my Database Design course at Northeastern. A simple web application that allows users to filter through a database containing Lonely Planet's Top 500 Travel Destinations."
            tech={["Python", "MySQL", "Flask", "HTML", "CSS", "JavaScript"]}
          />
        </div>
      </div>
    </section>
  );
}

function Project({
  title,
  description,
  tech,
}: {
  title: string;
  description: string;
  tech: string[];
}) {
  return (
    <div className={styles.project}>
      <h3 className={styles.title}>
        {title} <span className={styles.arrow}>→</span>
      </h3>

      <p className={styles.description}>{description}</p>

      <ul className={styles.techList}>
        {tech.map((item) => (
          <li key={item} className={styles.tech}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
