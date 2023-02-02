import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

const Dashboard = () => {
    const user = useContext(UserContext)
    return (
        <div>
            <h1>Hello {user}</h1>
            <h2>
                Your Dashboard
            </h2>
        </div>
    )
}

export default Dashboard