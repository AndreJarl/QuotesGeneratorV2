
const qcon = document.querySelector('.quotes');

function getQuotes(){
    fetch('https://api.themotivate365.com/stoic-quote')
    .then(response => {
       if(!response){
        throw new Error("Network not responding.");
       }
       return response.json();
    })

    .then(data =>{
        const author = data.author;
        const quotes = data.quote;
        
        let html = `
          <div class = "con">
           <div class = "qoutes">${quotes}</div>
           <div class = "author">- ${author}</div>
           </div>
        `;
     
        qcon.innerHTML = html;
     
    })
    .catch(error =>{
        console.error('Error:', error);
    })
}