import React from "react";

const Header = () => {
    return (
        <header style={styles.header}>
            <div style={styles.logo}>My Blog</div>
            <nav style={styles.nav}>
                <a href="/" style={styles.link}>Home</a>
                <a href="/podcast" style={styles.link}>Podcasts</a>
                <a href="/blogs" style={styles.link}>Blogs</a>
                <a href="/contact" style={styles.link}>Contact</a>
            </nav>
        </header>
    );
};

const styles = {
    header: {
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1rem 2rem",
        backgroundColor: "#333",
        color: "#fff",
    },
    logo: {
        fontSize: "1.5rem",
        fontWeight: "bold",
    },
    nav: {
        display: "flex",
        gap: "1rem",
    },
    link: {
        color: "#fff",
        textDecoration: "none",
        fontSize: "1rem",
    },
};

export default Header;
