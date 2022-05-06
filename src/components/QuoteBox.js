import './QuoteBox.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitterSquare } from '@fortawesome/free-brands-svg-icons';


// console.log(Quotes);
const QuoteBox = (props) => {
  return (
    <div id="quote-box"  className="container">
      <h2 id="text" >{props.quote}</h2>
      <p id="author" >-{props.author}</p>
      <div className="button-section">
        <a rel="noreferrer" id="tweet-quote" target="_blank" href={`https://twitter.com/intent/tweet?text=${props.quote}`} ><FontAwesomeIcon icon={faTwitterSquare} size="3x" /></a>
        <button id="new-quote" onClick={props.onNext} >New Quote</button>
      </div>
    </div>
  );
};

export default QuoteBox;
