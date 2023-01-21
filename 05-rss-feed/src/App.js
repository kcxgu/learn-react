import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [articles, setArticles] = useState([]);

  console.log(articles);

  const getArticles = async () => {
    try {
      const res = await axios.get("http://localhost:4000/");
      setArticles(res.data);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getArticles();
  }, [])

  return (
    <>
      <h1>05 - RSS Feed</h1>

    </>
  );
}

export default App;
