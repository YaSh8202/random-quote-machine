import { useEffect, useState } from "react";
import "./App.css";
import QuoteBox from "./components/QuoteBox";

import { library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitterSquare } from "@fortawesome/free-brands-svg-icons";

library.add(faTwitterSquare); 


function App() {
  const [randomQuote, setRandQuote] = useState("");

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
    document.documentElement.style.setProperty(
      "--main-color",
      getRandomColor()
    );
  };

  function getRandomColor() {
    const availableCharacters = "0123456789ABCDEF";
    const availableCharacterLength = availableCharacters.length;

    let color = "#";

    for (let i = 0; i < 6; i++) {
      color +=
        availableCharacters[
          Math.floor(Math.random() * availableCharacterLength)
        ];
    }

    return color;
  }

  return (
    <div className="App">
      <QuoteBox
        onNext={nextQuoteHandler}
        quote={randomQuote.quote}
        author={randomQuote.author}
      />
    </div>
  );
}

export default App;
