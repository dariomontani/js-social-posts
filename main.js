// Ciao ragazzi,
//     per gli snack fatti in classe usate questa repo
// js - jsnacks - blocco - 5
// esercizio di oggi: Social Posts
// nome repo: js - social - posts
// Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro javascript in cui:
// - Creiamo il nostro array di oggetti che rappresentano ciascun post.Ogni post dovrà avere le informazioni necessarie per stampare la relativa card: nome autore, foto profilo, data in formato americano, testo del post, immagine(non tutti i post devono avere una immagine), numero di likes.
// Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es.Unsplash(https://unsplash.it/300/300?image=<id>)
//     - Prendendo come riferimento il layout di esempio presente nell’html, stampiamo i post del nostro feed.
// - Rendiamo il tasto “Mi Piace” cliccabile con incremento del counter dei likes.



const post = [
    {
        nomeAutore: 'Phil Mangione',
        fotoProfilo: 'https://unsplash.it/300/300?image=',
        data: '10/12/2021',
        testoPost:'Placeat libero ipsa nobis ipsum quibusdam quas harum ut. Distinctio minima iusto. Ad ad maiores et sint voluptate recusandae architecto. Et nihil ullam aut alias.',
        immagine: 'https://unsplash.it/300/300?image=',
        numeroLikes: 100,
        numeroCasuale: Math.floor(Math.random() * 100),
    }
];

// indico dove inserire gli elementi
let container = document.getElementById('container');

for (let i = 0; i < post.length; i++) {

    let cards = post[i];

    let cardPost = `<div class="post">
            <div class="post__header">
                <div class="post-meta">                    
                    <div class="post-meta__icon">
                        <img class="profile-pic" src="${cards.fotoProfilo}${cards.numeroCasuale}" alt="${cards.nomeAutore}">                    
                    </div>
                    <div class="post-meta__data">
                        <div class="post-meta__author">${cards.nomeAutore}</div>
                        <div class="post-meta__time">${cards.data}</div>
                    </div>                    
                </div>
            </div>
            <div class="post__text">${cards.testoPost}</div>
            <div class="post__image">
                <img src="${cards.immagine}${cards.numeroCasuale}" alt="">
            </div>
            <div class="post__footer">
                <div class="likes js-likes">
                    <div class="likes__cta">
                        <a class="like-button  js-like-button" href="#" data-postid="1">
                            <i class="like-button__icon fas fa-thumbs-up" aria-hidden="true"></i>
                            <span class="like-button__label">Mi Piace</span>
                        </a>
                    </div>
                    <div class="likes__counter">
                        Piace a <b id="like-counter-1" class="js-likes-counter">${cards.numeroLikes}</b> persone
                    </div>
                </div> 
            </div>            
        </div>`;

        container.innerHTML += cardPost;
};


