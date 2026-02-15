import GithubIcon from "./icons/github";
import XIcon from "./icons/x";

export default function Socials() {
    return (
        <ul
            style={{
                margin: 0,
                padding: 0,
                display: "flex",
                listStyleType: "none",
                gap: "8px",
            }}
        >
            {socials.map((social) => (
                <li key={social.url}>
                    <a href={social.url} aria-label={social.name}>
                        <social.Icon />
                    </a>
                </li>
            ))}
        </ul>
    );
}

const socials = [
    {
        name: "GitHub",
        Icon: GithubIcon,
        url: "https://github.com/dominosaurs",
    },
    {
        name: "X / Twitter",
        Icon: XIcon,
        url: "https://x.com/dominosaurs_",
    },
];
