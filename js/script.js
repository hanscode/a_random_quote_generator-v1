/******************************************
Treehouse FSJS Techdegree:
Project 1 - A Random Quote Generator
Author - Hans Steffens
******************************************/


/*** 
 * `quotes` array 
***/

const quotes = [
  {
    quote: "I finally figured it out. Instead of working so hard to make ends meet, work on having fewer ends.",
    source: "Courtney Carver",
    citation: "Soulful Simplicity",
    year: "2017"

  },
  {
    quote: "A startup is a human institution designed to create a new product or service under conditions of extreme uncertainty.",
    source: "Eric Ries",
    tags: ['Entrepreneurship', 'Business', 'Startups']
  },
  {
    quote: "What you do is what matters, not what you think or say or plan.",
    source: "Jason Fried",
    citation: "Rework"
  },
  {
    quote: "Your life is far too valuable to be wasted on the life that everyone else is choosing.",
    source: "Joshua Becker",
    citation: "Inside-Out Simplicity",
    year: "2010"
  },
  {
    quote: "The most beautiful experience we can have is the mysterious. It is the fundamental emotion that stands at the cradle of true art and true science.",
    source: "Albert Einstein",
    tags: ['Science', 'Scientists', 'Physicists']
  }
];

/*** 
 * Variable to store the regular interval time
***/
let timeInterval;


/***
 * `getRandomColor` function
 * The following technique was learned from the course `Working with for loops - The refactoring Challenge`
***/

const randomValue = () => Math.floor(Math.random() * 256);

function getRandomColor(value) {
  const color = `rgb( ${value()}, ${value()}, ${value()} )`;
  return color;
}

/***
 * `getRandomQuote` function
***/

function getRandomQuote (array) {

  // Variable that uses `Math.floor`, `Math.random` and the length of the array parameter to generate a random number
  const randomNumber = Math.floor( Math.random() * array.length );
  
  // Variable that gets the quote object
  let randomQuote = array[randomNumber];

  // `return` the random quote variable
  return randomQuote;
}

/***
 * Auto-refreshed quotes: timing function
***/

// Timing function with the `setInterval()` method to print a new quote every 10 seconds.
function startTiming() {
    timeInterval = setInterval(printQuote, 10000);
}

// Function to pass the `timeInterval`variable value to `clearInterval()` in order to cancel the previous setInterval method.
function clearTiming() {
    clearInterval(timeInterval);
}


/***
 * `printQuote` function
***/

function printQuote () {

  // Phrase variable that stores the andom quote object from the getRandomQuote()
  const phrase = getRandomQuote(quotes);

  // Get Random background color
  const randomBackground = getRandomColor(randomValue);

  // The variable to store the HTML string output, that is to say, the random quote
  let html = '<p class="quote">' + phrase['quote'] + '</p>';

  html += '<p class="source">' + phrase['source'];

  // If the random quote object has a `citation` property, then concatenate a <span> element with the class "citation" to the HTML string.
  if ('citation' in phrase) {
    html += '<span class="citation">' + phrase['citation'] + '</span>';
  }

  // If the random quote object has a `year` property, then concatenate a <span> element with the class "year" to the HTML string.
  if ('year' in phrase) {
    html += '<span class="year">' + phrase['year'] + '</span>';
  }

  // If the random quote object has a `tags` property, then concatenate a new <span> element to the HTML string.
  if ('tags' in phrase) {
    html += '<span> | ' + phrase['tags'].join(', ') + '</span>';
  }
  
  // This is the closing tag `</p>` for the second paragraph with the class source.
  html += '</p>'; 

  // Update the background color of the body element with a random color
  document.querySelector('body').style.backgroundColor = randomBackground;

  // Print the random Quote generated changing the html string by using the `innerHTML` property.
  document.getElementById('quote-box').innerHTML = html; 

  // Cancel any previous regular interval that might be running and starts a new interval.
  clearTiming();
  startTiming();
  
}

// Runs the `printQuote()` function on page load
printQuote();

/***
 * click event listener for the print quote button
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);

