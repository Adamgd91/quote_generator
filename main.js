let apiQuotes = [];

// Show New Quote

function newQuote() {
  // Pick a random quote from Array
  const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
  console.log(quote);
  return;
}
// Get Quotes From API

async function getQuotes() {
  const apiUrl = "https://jacintodesign.github.io/quotes-api/data/quotes.json";
  try {
    const response = await fetch(apiUrl);
    apiQuotes = await response.json();
    newQuote();
    // console.log(apiQuotes[11]);
  } catch (e) {
    // Catching Error
    alert("Error Error Error");
  }
}

// On Load

getQuotes();
