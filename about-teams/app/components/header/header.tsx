import styles from "./header.module.css";

export default function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.hello}>
        Hello! <span className={styles.wave}>👋</span>
      </h1>

      <h2 className={styles.tagline}>
        I'm <span className={styles.name}>Team Name</span>, a design-minded
        front-end software engineer focused on building beautiful interfaces
        & experiences 💻
      </h2>

      <h3 className={styles.contact}>
        Get in touch 👉{" "}
        <a
          href="mailto:your.email@gmail.com"
          target="_blank"
          className={styles.link}
        >
          your.email@gmail.com
        </a>
      </h3>
    </header>
  );
}
