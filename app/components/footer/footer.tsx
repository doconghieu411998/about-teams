import styles from "./footer.module.css";

export default function Footer() {
  return (
    <div className={styles.footer}>
      <div className={styles.left}>
        <p>Designed & Developed by</p>
        <p>
          <strong>Teams Name</strong> 🤘 <span>2025</span>
        </p>
      </div>

      <div className={styles.right}>
        <a href="#">EMAIL</a>
        <a href="#">TWITTER</a>
        <a href="#">INSTAGRAM</a>
        <a href="#">CODEPEN</a>
        <a href="#">GITHUB</a>
        <a href="#">LINKEDIN</a>
      </div>
    </div>
  );
}
