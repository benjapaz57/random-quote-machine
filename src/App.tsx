import { useState } from 'react'
import quotes from "./assets/quotes.json"
import {FaTwitter, FaQuoteLeft, FaQuoteRight} from 'react-icons/fa'
import './App.css'

interface Quote{
  quote: string,
  author: string
}

const getRandomQuote = (): Quote => {
  return quotes[Math.floor(Math.random() * quotes.length)]
}

function App() {
  const [quote, setQuote] = useState<Quote>(getRandomQuote());
  const changeQuote = () => {
    setQuote(getRandomQuote());
  }


  return <div className='background'>
    <div id="quote-box">
      <div className='quote-content'>
        <FaQuoteLeft size='10' />
        <h2 id="text">{quote.quote}</h2>
        <FaQuoteRight size='10' />
        <h4 id="author">--{quote.author}--</h4>
      </div>
      <div className="buttons">
        <a href="twitter.com/intent/tweet" id='tweet-quote' target='blank'>
          <FaTwitter size='10'/>
        </a>
        <button id="new-quote" onClick={changeQuote}>New Quote</button>
      </div>
    </div>
  </div>
}

export default App
