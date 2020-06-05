// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-backend.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each 'article' in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Use your function to create a card for each of the articles and add the card to the DOM.
const cardContainer = document.querySelector('.cards-container')

axios.get('https://lambda-times-backend.herokuapp.com/articles')
    .then(response => {

        Object.values(response.data.articles).forEach(subject => {
            subject.forEach(article => {
                console.log(article)
            })
        })
    })
    .catch(error => {
        console.log(`Uh oh: ${error}`)
    })
    .finally(()=> {
        console.log('done')
    })

    function cardMaker(topic){
        //Declare Variables
        const {headline, authorPhoto, authorName} = topic

        const card = document.createElement('div')
        const heading = document.createElement('div')
        const author = document.createElement('div')
        const imageCon = document.createElement('img')
        const image = document.createElement('div')
        const name = document.createElement('span')



    }

    cardMaker({headline: "AI: What Are the Ethical Ramifications of the Future?", authorPhoto: "./assets/max.jpg", authorName: "MAX GOODBOYE"})
//  <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>