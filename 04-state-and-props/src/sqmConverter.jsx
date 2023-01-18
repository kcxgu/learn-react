import { useState } from "react";

const SQMConverter = ({ username }) => {
    const [sqm, setSqm] = useState(0);
    const [sqft, setSqft] = useState(0);

    const handleSqm = e => {
        setSqm(e.target.value);
        setSqft(sqm * 10.76391042)
    }
    return (
        <>
            <p>Hey {username},</p>
            <input
                type="text"
                placeholder="Number in sqm"
                onChange={handleSqm}
            /><span> square metres</span>
            <p>is {sqft} square feet</p>
        </>
    )
}

export default SQMConverter;