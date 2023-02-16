import { useState } from "react";
import { FiPlay, FiPause, FiFastForward, FiRewind } from "react-icons/fi";

const Controls = () => {
    const [isPlaying, setIsPlaying] = useState(false);

    const handlePlay = () => {
        setIsPlaying(true)
    }

    const handlePause = () => {
        setIsPlaying(false)
    }

    return (
        <div className="flex flex-row justify-center items-center gap-4 p-2 my-2 cursor-pointer text-xl">
            <FiRewind />
            {isPlaying ? (
                <FiPause onClick={handlePause} className="text-2xl" />
            ) : (
                <FiPlay onClick={handlePlay} className="text-2xl" />
            )}
            <FiFastForward />
        </div>
    )
}

export default Controls