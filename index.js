let btn = document.getElementById("btn");
let quote = document.querySelector(".quote");
let person = document.querySelector(".person");

btn.addEventListener("click", generateQuote);

const quotes = [
  {
    quote: `“Live as if you were to die tomorrow. Learn as if you were to live forever.” `,
    person: `Mahatma Gandhi`,
  },
  {
    quote: `“That which does not kill us makes us stronger.”`,
    person: `Friedrich Nietzsche`,
  },
  {
    quote: ` “Be who you are and say what you feel, because those who mind don’t matter and those who matter don’t mind.” `,
    person: `Bernard M. Baruch`,
  },
  {
    quote: `“We must not allow other people’s limited perceptions to define us.”`,
    person: `Virginia Satir`,
  },
  {
    quote: ` “Be yourself; everyone else is already taken.”`,
    person: `Oscar Wilde`,
  },
  {
    quote: `“This above all: to thine own self be true.”`,
    person: `William Shakespeare`,
  },
  {
    quote: `“If you cannot do great things, do small things in a great way.”`,
    person: `Napoleon Hill`,
  },
];

function generateQuote() {
  let random = Number.parseInt(Math.random() * quotes.length + 1);
  quote.innerHTML = `${quotes[random].quote}`;
  person.innerHTML = `${quotes[random].person}`;
}
