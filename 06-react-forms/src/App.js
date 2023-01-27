import { useState } from "react";

function App() {
  const [userInfo, setUserInfo] = useState({
    firstName: "",
    lastName: "",
    email: "",
    dob: "",
    gender: "",
  })

  const [prompts, setPrompts] = useState([{
    prompt: "",
    answer: "",
    timestamp: new Date().getTime()
  }])

  console.log(userInfo);
  console.log(prompts);

  const handleInput = e => {
    const { name, value } = e.target;
    setUserInfo({
      ...userInfo,
      [name]: value
    })
  }

  const handlePrompt = (e, i) => {
    const { name, value } = e.target;
    let newPrompts = [...prompts];
    newPrompts[i][name] = value;
    setPrompts(newPrompts);
  }

  const handleAddPrompt = () => {
    setPrompts([...prompts, {
      prompt: "",
      answer: "",
      timestamp: new Date().getTime()
    }])
  }

  return (
    <>
      <h1 className="text-3xl text-center my-4 py-2">06 - React Forms</h1>
      <form className="w-5/6 max-w-xl mx-auto pt-4 pb-10">
        <fieldset className="flex flex-col gap-2 border py-1 px-4">
          <legend className="text-2xl font-semibold mb-2 text-gray-500">About You</legend>
          <div>
            <label className="text-3xl font-semibold">What's your name?</label>
            <input
              className="w-4/5 border rounded text-lg leading-tight py-3 px-2 mt-4 mb-3 focus:outline-indigo-200"
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First name"
              onChange={handleInput}
            />
            <input
              className="w-4/5 border rounded text-lg leading-tight py-3 px-2 mb-4 focus:outline-indigo-200"
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last name"
              onChange={handleInput}
            />
          </div>
          <div>
            <label className="text-3xl font-semibold">What's your email?</label>
            <input
              className="w-4/5 border rounded text-lg leading-tight py-3 px-2 mt-4 mb-3 focus:outline-indigo-200"
              id="email"
              name="email"
              type="email"
              placeholder="email@example.com"
              onChange={handleInput}
            />
          </div>
          <div>
            <label className="text-3xl font-semibold">What's your date of birth?</label>
            <input
              className="w-3/5 border rounded text-lg leading-tight py-3 px-2 mt-4 mb-3 focus:outline-indigo-200"
              id="dob"
              name="dob"
              type="date"
              max="2005-01-27"
              placeholder="Date of birth"
              onChange={handleInput}
            />
          </div>
          <div className="flex flex-col">
            <label className="text-3xl font-semibold">What's your gender?</label>
            <select
              className="w-3/5 border rounded text-lg leading-tight py-3 px-2 mt-4 mb-3 focus:outline-indigo-200"
              id="gender" name="gender"
              onChange={handleInput}
            >
              <option>Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="MTF">MTF</option>
              <option value="FTM">FTM</option>
              <option value="Non-Binary">Non-binary</option>
            </select>
          </div>
        </fieldset>
        <fieldset className="flex flex-col gap-2 border py-1 px-4">
          <legend className="text-2xl font-semibold mb-2 text-gray-500">Prompts</legend>
          {prompts.map((prompt, i) => (
            <div key={prompt.timestamp} className="flex flex-col">
              <label className="text-3xl font-semibold">Select a prompt</label>
              <select className="w-full border rounded text-lg leading-tight py-3 px-2 mt-4 mb-3 focus:outline-indigo-200"
                id="prompt" name="prompt"
                onChange={e => handlePrompt(e, i)}>
                <option value="Dating me is like...">Dating me is like...</option>
                <option value="Fact about me that surprises people:">Fact about me that surprises people:</option>
                <option value="I want someone who...">I want someone who...</option>
                <option value="I spend most of my money on:">I spend most of my money on:</option>
                <option value="The most spontaneous thing I've done:">The most spontaneous thing I've done:</option>
                <option value="We're the same type of weird if...">We're the same type of weird if...</option>
              </select>
              <textarea
                className="border border-dashed py-3 px-2 mb-4 focus:outline-indigo-200"
                id="answer"
                name="answer"
                rows={5}
                placeholder="Let your true colours shine through"
                onChange={e => handlePrompt(e, i)}
              />
            </div>
          ))}
          <div className="w-full flex justify-center">
            <button className="border bg-indigo-400 py-1 px-2 rounded-lg text-white font-bold text-xl"
              type="button"
              onClick={handleAddPrompt}
            >
              Add Prompt
            </button>
          </div>
        </fieldset>
      </form>
    </>
  );
}

export default App;
