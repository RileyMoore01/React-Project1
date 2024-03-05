const Links = () => {

    const items = [
        "Homepage",
        "Services",
        "Portfolio",
        "Contact Me",
        "About Me"
    ]
    return (
        <div className="links">
            {items.map((item) => (
                <a href={`#${item}`} key={item}>
                    {item}
                </a>
            ))}
        </div>
    )
}

export default Links