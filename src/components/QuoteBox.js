
import React, {useState} from 'react';
import getRandom from '../utils/getRandom';
import quotes from '../quotes.json';
import colors from '../utils/colors';

const QuoteBox = () => {

  const [ quote, setQuoteBox ] = useState(quotes[getRandom()]);

  const ChangeQuote = () => {
    const random = getRandom()
    setQuoteBox(quotes[random]);
  }

  const color = colors[Math.floor(Math.random() * colors.length)];

  document.body.style = `background: ${color}`

  return (
    <div className="quote__card" style={{color: color}} >
      <div className="container">
        <p className='quote__card-text '> <span><i className="fa-solid fa-quote-left"></i></span> {quote.quote} </p>
        <div className="quote__card-author">
          <small> {quote.author} </small>
        </div>
        <div className="quote__card-button">
          <button onClick={ChangeQuote} style={{background: color}} ><i className="fa-solid fa-angle-right"></i></button>
        </div>
      </div>
    </div>
  )

};

export default QuoteBox; 