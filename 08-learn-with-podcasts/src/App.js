import { useEffect, useState } from "react";
import jwt_decode from "jwt-decode";

function App() {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);

  const handleCallBack = (res) => {
    let user = jwt_decode(res.credential);
    setUser(user);
    setLoggedIn(true);
  }

  const handleLogOut = () => {
    setLoggedIn(false);
    setUser({});
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "651330368968-bt2iianhovluohqs7a7jouh4ppddtu2r.apps.googleusercontent.com",
      callback: handleCallBack
    });
    google.accounts.id.renderButton(
      document.getElementById("SignIn"),
      { theme: "outline", size: "large" }
    )
  }, [loggedIn])
  return (
    <div className="flex flex-col items-center">
      <h1 className="text-3xl mt-5 py-2 text-center">08 - Learn With Podcasts</h1>
      {loggedIn ? (
        <>
          <button
            className="border py-1 px-3 rounded-lg my-2 bg-blue-500 text-white"
            onClick={handleLogOut}
          >
            Log Out
          </button>
          <h3>Hi there, {user.given_name}</h3>
        </>
      ) : (
        <>
          <div id="SignIn"></div>
        </>
      )}
    </div>
  );
}

export default App;
