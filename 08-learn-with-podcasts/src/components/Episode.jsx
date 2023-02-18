import { useContext } from "react"
import { UserContext } from "../contexts/UserContext"

const Episode = ({ title, pubDate, link, mp3 }) => {

    const [user] = useContext(UserContext);

    return (
        <div className="max-w-3xl flex flex-row items-center border rounded-lg my-4">
            <div className="w-1/2 pl-2 mt-2 mb-4 py-2 px-5 mx-auto">
                <a href={link} target="_blank" rel="noopener noreferrer"
                    className="underline hover:opacity-70"
                >
                    <p>{title}</p>
                </a>
                <audio src={mp3} className="my-4 px-2" controls />
                <p>{pubDate}</p>
            </div>
            <div className="w-1/2 flex flex-col gap-1 my-2 px-8">
                <label htmlFor="notes" className="text-gray-700 font-medium">Make Notes Here, {user.given_name}</label>
                <textarea
                    id="notes"
                    className="border rounded-lg p-2"
                    placeholder="What did you learn from the episode?"
                    rows={5}
                />
            </div>
        </div>
    )
}

export default Episode