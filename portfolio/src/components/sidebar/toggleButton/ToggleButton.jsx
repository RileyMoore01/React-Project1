const ToggleButton = ({setOpen}) => {
    return <button onClick={() => setOpen((prev) => !prev)}>
            Toggle Button
        </button>;
}

export default ToggleButton