
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





































































































// const container = document.querySelector('.quotes');
// const person = document.querySelector('.person');
// const btn = document.querySelector('.btn');

// const quotes = [{
// 				quote: `"I agree its hard to learn programming but do you know what's harder?.... Being poor."`,
// 				person: `- Frank Nui`
// }, {
// 				quote: `"There's no rest for me in this world, perhaps in the next."`,
// 				person: `- Thomas Shelby`
// }, {
// 				quote:`"Fairy tales are more than true: not because they tell us that dragons exist, but because they tell us that dragons can be beaten."`,
// 				person: `- Neil Gaiman, Coraline`
// }, {
// 			quote: `"Life isn't about finding yourself. Life is about creating yourself."`,
// 			person: `- George Bernard Shaw`
// }, {
// 			quote: `"Success is not final, failure is not fatal: it is the courage to continue that counts."`	,
// 			person: '- Winston S. Churchill'
// }, {
// 				quote: `"Sometimes the questions are complicated and the answers are simple."`,
// 			person: `- Dr. Seuss`
// }, {
// 						quote: `"Never doubt that a small group of thoughtful, committed, citizens can change the world. Indeed, it is the only thing that ever has."`,
// 			person: `- Margaret Mead`
// }, {
// 						quote: `"You've got to be really dialed into exactly who you are to the one hundredth power or you're just everyone else"`	,
// 			person: `- Kanye West `
			
// }, {
// 				quote: `"Dont compare yourself with anyone in this world...if you do so, you are insulting yourself."`	,
// 			person: `- Bill Gates`
			
// }, {
// 				quote: `"I dont ever give up"`	,
// 			person: `- Elon Musk`
// }, {
// 				quote: `"Failure is an option here. If things are not failing, you are not innovating enough"`	,
// 			person: `- Elon Musk`
// }, {
// 				quote: `"Shoot for the stars, if you fall land on a cloud"`	,
// 			person: `- Kanye West`
// }, {
// 				quote: `"The ones who are crazy enough to think that they can change the world, are the ones who do."`	,
// 			person: `- Steves Jobs`
// }, {
// 				quote: `"The only thing standing between you and your goal is the bullshit story you keep telling yourself as to why you can't achieve it."`	,
// 			person: `- The Wolft of Wall Street`
// }, {
// 				quote: `"If you’re afraid to fail, then you’re probably going to fail."` ,
// 				person: `- Kobe Bryant`
// }, {
// 					quote: `"I can’t relate to lazy people. We don’t speak the same language. I don’t understand you. I don’t want to understand you."` ,
// 				person: `- Kobe Bryant`
// }, {
// 					quote: `"Great things comes from hard work and perseverance, no excuse."` ,
// 				person: `- Kobe Bryant`
// }, {
// 					quote: `"If you quit once it becomes a habit, so dont quit."` ,
// 				person: `- Michael Jordan`
// }, {
// 					quote: `"Some people want it to happen, some people wish it would happen, others make it happen."` ,
// 				person: `- Michael Jordan`
// }, {
// 					quote: `"Hard work beats talent every f*ckin time!"` ,
// 				person: `- The Wolf of Wallet Street`
// }, {
// 					quote: `"Failing doesn't give you a reason to give up, as long as you believe."` ,
// 				person: `- Naruto Uzimaki`
// }, {
// 					quote: `"If you dont take risks, you can't create a future."` ,
// 				person: `- Monkey D. Luffy`
// }, {
// 					quote: `"We can't waste time worrying about what ifs."` ,
// 				person: `- Ichigo Kurosaki`
// }, {
// 					quote: `"Never forget what you want to become."` ,
// 				person: `- Todoroki Shoto`
// }, {
// 					quote: `"Dont give up the beginning is always the hardest, so lets keep going to the very end"` ,
// 				person: `- Natsu Dragneel`
// }, {
// 				quote: `"Do not fear failure but rather fear not trying."` ,
// 				person: `- Roy T. Bennett`
// }, {
// 			quote: `"Everything you can imagine is real."` ,
// 				person: `- Pablo Picasso`	
// }, ];

// btn.addEventListener("click", function(){
				
// 				let random = Math.floor(Math.random() * quotes.length);
				
// container.innerText = quotes[random].quote;
//  person.innerText = quotes[random].person;
				
				
// })