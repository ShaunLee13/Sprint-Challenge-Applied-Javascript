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
                const newCard = cardMaker(article)
                cardContainer.appendChild(newCard)
            })
        })
    })
    .catch(error => {
        console.log(`Uh oh: ${error}`)
    })

    function cardMaker(topic){
        //Declare Variables
        const {headline, authorPhoto, authorName} = topic

        const card = document.createElement('div')
        const heading = document.createElement('div')
        const author = document.createElement('div')
        const imageCon = document.createElement('div')
        const image = document.createElement('img')
        const name = document.createElement('span')

        //Assign Classes & TextContent
        card.classList.add('card')
        heading.classList.add('headline')
        author.classList.add('author')
        imageCon.classList.add('img-container')
        heading.textContent = headline
        image.src = authorPhoto
        name.textContent = `By ${authorName}`

        //Append Comps
        card.append(heading, author)
        author.append(imageCon, name)
        imageCon.appendChild(image)

        return card
    }
