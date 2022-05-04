import { useEffect, useState } from "react";
import "./App.css";
import QuoteBox from "./components/QuoteBox";

function App() {
  const [randQuote, setRandQuote] = useState("");

  const [quotes, setQuotes] = useState([]);

  const fetchData = () => {
    fetch(
      "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setQuotes(data.quotes);
      });
  };

  useEffect(() => {
    fetchData();
    setRandQuote({
      quote:
        "Life isn't about getting and having, it's about giving and being.",
      author: "Kevin Kruse",
    });
  }, []);
  const nextQuoteHandler = () => {
    var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    setRandQuote(randomQuote);
  };

  return (
    <div className="App">
      <QuoteBox
        onNext={nextQuoteHandler}
        quote={randQuote.quote}
        author={randQuote.author}
      />
    </div>
  );
}

export default App;
