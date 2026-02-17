import Socials from "./components/socials";

function App() {
    return (
        <main
            style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                minHeight: "calc(100vh - 64px)",
                maxHeight: "calc(100vh - 64px)",
            }}
        >
            <p
                style={{
                    opacity: 0.05,
                    transitionDuration: "0.2s",
                }}
                onMouseEnter={(e) => {
                    e.currentTarget.style.opacity = "0.2";
                }}
                onMouseLeave={(e) => {
                    e.currentTarget.style.opacity = "0.05";
                }}
            >
                proud member of the{" "}
                <a
                    href="https://lara-army.github.io"
                    style={{
                        color: "var(--primary-color)",
                    }}
                >
                    Laravel Indonesia
                </a>
                .
            </p>
            <h1
                style={{
                    margin: 0,
                    lineHeight: 1,
                    fontSize: "3rem",
                    textTransform: "uppercase",
                    color: "var(--primary-color)",
                    wordWrap: "break-word",
                    marginLeft: "-2px",
                }}
            >
                dominosaurs
            </h1>
            <div
                style={{
                    marginBottom: "1rem",
                }}
            >
                Full time learner, mostly a{" "}
                <strong
                    style={{
                        color: "var(--primary-color)",
                    }}
                >
                    web developer
                </strong>
                .
            </div>

            <Socials />

            <div
                style={{
                    marginBottom: "2rem",
                }}
            ></div>
        </main>
    );
}

export default App;
