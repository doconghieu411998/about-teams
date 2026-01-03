import styles from "./experience.module.css";

export default function Experience() {
  return (
    <section className={styles.experience}>
      <div className={styles.container}>
        {/* LABEL */}
        <div className={styles.label}>EXPERIENCE</div>

        {/* LIST */}
        <div className={styles.list}>
          <ExperienceItem
            company="Upstatement"
            role="Engineer"
            time="May 2018 - Present"
          />

          <ExperienceItem
            company="Scout"
            role="Studio Developer"
            time="Jan - June 2018"
          />

          <ExperienceItem
            company="Apple Music"
            role="UI Engineer Co-op"
            time="July - Dec 2017"
          />

          <ExperienceItem
            company="Scout"
            role="Studio Developer"
            time="Jan - June 2017"
          />

          <ExperienceItem
            company="Starry"
            role="Software Engineer Co-op"
            time="July - Dec 2016"
          />

          <ExperienceItem
            company="Northeastern University"
            role="HCI Teaching Assistant"
            time="Jan - May 2016"
          />

          <ExperienceItem
            company="NU Women in Tech"
            role="President & Web Chair"
            time="Jan 2016 - May 2017"
          />

          <ExperienceItem
            company="MullenLowe U.S."
            role="Creative Technologist Co-op"
            time="July - Dec 2015"
          />

          <ExperienceItem
            company="Northeastern University"
            role="HCI Research Assistant"
            time="Mar - May 2015"
          />
        </div>
      </div>
    </section>
  );
}

function ExperienceItem({
  company,
  role,
  time,
}: {
  company: string;
  role: string;
  time: string;
}) {
  return (
    <div className={styles.item}>
      <div className={styles.left}>
        <div className={styles.company}>{company}</div>
        <div className={styles.role}>{role}</div>
      </div>

      <div className={styles.time}>{time}</div>
    </div>
  );
}
