import { useEffect, useState, useRef } from "react";
import jwt_decode from "jwt-decode";
import { UserContext } from "./contexts/UserContext";
import Header from "./components/Header";

function App() {
  const [user, setUser] = useState({});
  const [loggedIn, setLoggedIn] = useState(false);
  const signInButton = useRef();

  const handleCallBack = (res) => {
    let user = jwt_decode(res.credential);
    setUser(user);
    setLoggedIn(true);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: "651330368968-bt2iianhovluohqs7a7jouh4ppddtu2r.apps.googleusercontent.com",
      callback: handleCallBack
    });
    google.accounts.id.renderButton(
      signInButton.current,
      { theme: "outline", size: "large" }
    )
  }, [loggedIn])
  return (
    <UserContext.Provider value={[user, setUser]}>
      <Header loggedIn={loggedIn} setLoggedIn={setLoggedIn} signInButton={signInButton} />
    </UserContext.Provider>
  );
}

export default App;
