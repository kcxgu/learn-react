import Controls from "./Controls"

const Episode = ({ title, pubDate, link, mp3 }) => {
    return (
        <div className="pl-2 mt-2 mb-4 border w-3/4 py-2 px-5 rounded-lg">
            <a href={link} target="_blank" rel="noopener noreferrer"
                className="underline hover:opacity-70"
            >
                <p>{title}</p>
            </a>
            <Controls />
            <p>{pubDate}</p>
        </div>
    )
}

export default Episode