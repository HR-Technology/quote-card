import quotes from '../quotes.json'

const getRandom = () => Math.floor(Math.random() * quotes.length)

export default getRandom;