var quotes = [
    'Be the change that you wish to see in the world - Mahatma Gandhi',
    'Live as if you were to die tomorrow. Learn as if you were to live forever - Mahatma Gandhi',
    'A man is but a product of his thoughts. What he thinks he becomes. - Mahatma Gandhi',
    'Happiness is when what you think, what you say, and what you do are in harmony. - Mahatma Gandhi',
    'In a gentle way, you can shake the world. - Mahatma Gandhi ',
    'The best way to find yourself is to lose yourself in the service of others. - Mahatma Gandhi  ',
   
]
function newQuote(){
    var randomNumber = Math.floor(Math.random() * (quotes.length));
    document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}

