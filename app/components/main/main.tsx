import styles from "./main.module.css";

export default function Main() {
    const members = [
        {
            name: "Nguyễn Văn A",
            role: "Front-end Developer",
            desc: "Chuyên xây dựng giao diện trực quan, mượt mà và hiệu năng cao.",
            tech: "[React] [Next.js] [CSS Modules] [UI/UX]",
            img: "/demo-avatar1.jpg",
        },
        {
            name: "Nguyễn Văn An",
            role: "Back-end Developer",
            desc: "Thiết kế hệ thống và API hiệu quả, bảo mật.",
            tech: "[Node.js] [Express] [MongoDB] [JWT]",
            img: "/demo-avatar2.jpg",
        },
        {
            name: "Nguyễn Văn A",
            role: "UI/UX Designer",
            desc: "Đam mê sáng tạo trải nghiệm người dùng hiện đại và dễ sử dụng.",
            tech: "[Figma] [Adobe XD] [Design Systems] [Prototyping]",
            img: "/demo-avatar3.jpg",
        },
        {
            name: "Nguyễn Văn A",
            role: "Full-stack Developer",
            desc: "Yêu thích học hỏi công nghệ mới và phát triển sản phẩm hoàn chỉnh.",
            tech: "[TypeScript] [React] [PostgreSQL] [Docker]",
            img: "/demo-avatar4.jpg",
        },
    ];

    return (
        <section className={styles.about}>
            <div className={styles.container}>
                <div className={styles.title}>ABOUT US</div>
                <div>
                    {members.map((m, i) => (
                        <div key={i} className={styles.member}>
                            <div className={styles.avatarWrapper}>
                                <img src={m.img} alt={m.name} className={styles.avatar} />
                            </div>
                            <div className={styles.info}>
                                <p className={styles.role}>{m.role}</p>
                                <p className={styles.desc}>{m.desc}</p>
                                <p className={styles.tech}>{m.tech}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
