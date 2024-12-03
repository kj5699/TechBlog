import React from "react";
const IntroCard = ({ title, slug, imageUrl="", tags }) => {
    return (
        <div style={styles.card}>
            <a href={`/${slug}`} rel="noopener noreferrer">
            <div style={styles.content}>
                <h3 style={styles.title}>{title}</h3>
                {tags && (
                    <div style={styles.tags}>
                        {tags.map((tag, index) => (
                            <span key={index} style={styles.tag}>
                {tag}
              </span>
                        ))}
                    </div>
                )}

            </div>
            </a>
        </div>
    );
};

const styles = {
    card: {
        width: "300px",
        border: "1px solid #ddd",
        borderRadius: "10px",
        overflow: "hidden",
        boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        transition: "transform 0.3s ease, box-shadow 0.3s ease",
        backgroundColor: "#fff",
        cursor: "pointer",
    },
    imageWrapper: {
        width: "100%",
        height: "180px",
        overflow: "hidden",
    },
    image: {
        width: "100%",
        height: "100%",
        objectFit: "cover",
        transition: "transform 0.3s ease",
    },
    content: {
        padding: "1rem",
        textAlign: "center",
    },
    title: {
        fontSize: "1.25rem",
        fontWeight: "bold",
        marginBottom: "0.5rem",
        color: "#333",
    },
    description: {
        fontSize: "0.9rem",
        color: "#555",
        marginBottom: "1rem",
    },
    tags: {
        marginBottom: "1rem",
    },
    tag: {
        display: "inline-block",
        backgroundColor: "#f0f0f0",
        color: "#333",
        fontSize: "0.8rem",
        padding: "0.3rem 0.5rem",
        borderRadius: "5px",
        margin: "0 0.2rem",
    },
    button: {
        display: "inline-block",
        padding: "0.5rem 1rem",
        backgroundColor: "#007bff",
        color: "#fff",
        borderRadius: "5px",
        textDecoration: "none",
        fontWeight: "bold",
        transition: "background-color 0.3s ease",
    },
    cardHover: {
        transform: "scale(1.05)",
        boxShadow: "0 8px 16px rgba(0, 0, 0, 0.2)",
    },
};

// Add hover effect
const applyHoverEffect = (cardElement) => {
    cardElement.addEventListener("mouseenter", () => {
        Object.assign(cardElement.style, styles.cardHover);
    });

    cardElement.addEventListener("mouseleave", () => {
        Object.assign(cardElement.style, styles.card);
    });
};



export default IntroCard;