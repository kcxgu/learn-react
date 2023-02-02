import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

const Podcasts = () => {
    const user = useContext(UserContext)
    return (
        <div>
            <h1>Hello {user}</h1>
            <h2>
                Your Podcasts
            </h2>
        </div>
    )
}

export default Podcasts