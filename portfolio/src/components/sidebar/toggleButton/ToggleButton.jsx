const ToggleButton = ({setOpen}) => {
    return <button onClick={() => setOpen((prev) => !prev)}>
            <svg width="23" height="23" viewBox="0 0 23 23">
                <path strokeWidth="3" stroke="black" strokeLinecap="round"></path>
                <path strokeWidth="3" stroke="black" strokeLinecap="round"></path>
                <path strokeWidth="3" stroke="black" strokeLinecap="round"></path>
            </svg>
        </button>;
}

export default ToggleButton