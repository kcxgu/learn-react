const ChangeName = ({ username, setUsername }) => {

    const handlePropChange = () => {
        setUsername("there")
    }

    return (
        <>
            <button onClick={handlePropChange}
            >
                Hide My Name
            </button>
            <p>{username}, what do you have planned for today</p>
        </>
    )
}

export default ChangeName;