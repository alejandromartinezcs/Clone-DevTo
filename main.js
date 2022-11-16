const db = 'https://kodemiadevto-default-rtdb.firebaseio.com/articles';

const cards = document.getElementById('container-article');



fetch(`${db}.json`)
    .then((res) => res.json())
    .then((data) => {
        const keys = Object.keys(data);

        keys.forEach((id) => {
            const article = data[id];
            let imagen = article.cover_image;


            const card = document.createElement('div');
            const cardImg = document.createElement('img');
            cardImg.classList.add('card-img-top');
            cardImg.src = imagen;
            const title = document.createElement('a');
            const content = document.createElement('p');

            title.innerText = article.title;
            title.href = `./form.html?id=${id}`;
            content.innerText = article.parrafo;
            
            cards.appendChild(card);
            card.appendChild(cardImg);
            card.appendChild(title);
            card.appendChild(content);
        })

    })


