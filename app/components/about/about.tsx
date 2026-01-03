import styles from "./about.module.css";

export default function About() {
    return (
        <section className={styles.about}>
            <div className={styles.container}>
                {/* LEFT LABEL */}
                <div className={styles.label}>BACKGROUND</div>

                {/* RIGHT CONTENT */}
                <div className={styles.content}>
                    <p>
                        I'm currently an Engineer at <strong>Upstatement</strong> building
                        things for the web with some awesome people. I recently graduated
                        from <strong>Northeastern University</strong> after completing three
                        awesome six-month co-ops at <strong>MullenLowe U.S.</strong>,{" "}
                        <strong>Starry</strong>, and <strong>Apple Music</strong>.
                    </p>

                    <p>
                        As a software engineer, I enjoy bridging the gap between engineering
                        and design — combining my technical knowledge with my keen eye for
                        design to create a beautiful product. My goal is to always build
                        applications that are scalable and efficient under the hood while
                        providing engaging, pixel-perfect user experiences.
                    </p>

                    <p>
                        <strong>When I'm not in front of a computer screen</strong>, I'm
                        probably snowboarding, cruising around on my penny board, or
                        crossing off another item on my bucket list.
                    </p>
                </div>
            </div>

            {/* SKILLS */}
            <div className={styles.skills}>
                <div className={styles.label}>SKILLS</div>

                <div className={styles.skillGrid}>
                    <div>
                        <h4>LANGUAGES</h4>
                        <ul>
                            <li>JavaScript (ES6)</li>
                            <li>TypeScript</li>
                            <li>HTML</li>
                            <li>CSS / Sass</li>
                            <li>Python</li>
                            <li>SQL</li>
                            <li>R</li>
                        </ul>
                    </div>

                    <div>
                        <h4>FRAMEWORKS</h4>
                        <ul>
                            <li>React</li>
                            <li>Next.js</li>
                            <li>Node</li>
                            <li>D3</li>
                            <li>WordPress</li>
                        </ul>
                    </div>

                    <div>
                        <h4>TOOLS</h4>
                        <ul>
                            <li>Git & GitHub</li>
                            <li>Bash</li>
                            <li>Postman</li>
                            <li>MongoDB</li>
                        </ul>
                    </div>

                    <div>
                        <h4>DESIGN</h4>
                        <ul>
                            <li>Figma</li>
                            <li>Sketch</li>
                            <li>Wireframing</li>
                            <li>Prototyping</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
