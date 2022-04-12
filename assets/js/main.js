/* Descrizione:
Ricreiamo un feed social aggiungendo al layout di base fornito, il nostro script JS in cui:

//Milestone 1
Creiamo il nostro array di oggetti che rappresentano ciascun post.
Ogni post dovrà avere le informazioni necessarie per stampare la relativa card:
- id del post, numero progressivo da 1 a n
- nome autore,
- foto autore,
- data in formato americano (mm-gg-yyyy),
- testo del post,
- immagine (non tutti i post devono avere una immagine),
- numero di likes.
 Non è necessario creare date casuali
 Per le immagini va bene utilizzare qualsiasi servizio di placeholder ad es. Unsplash (https://unsplash.it/300/300?image=<id>)

//Milestone 2
Prendendo come riferimento il layout di esempio presente nell'html, stampiamo i post del nostro feed.

//Milestone 3
Se clicchiamo sul tasto "Mi Piace" cambiamo il colore al testo del bottone e incrementiamo il counter dei likes relativo. Salviamo in un secondo array gli id dei post ai quali abbiamo messo il like.
BONUS
Formattare le date in formato italiano (gg/mm/aaaa)
Gestire l'assenza dell'immagine profilo con un elemento di fallback che contiene le iniziali dell'utente (es. Luca Formicola > LF).
Al click su un pulsante "Mi Piace" di un post, se abbiamo già cliccato dobbiamo decrementare il contatore e cambiare il colore del bottone.

*/


// MILESTONE 1 

const usersPosts = [
    {
        idpost : 1,
        author_name : 'Giuseppe Costello',
        author_image : 'https://picsum.photos/50/50',
        date : '10/06/2021',
        post_text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quibusdam nam, velit explicabo tempore debitis recusandae minus dignissimos vel dolore?',
        post_image : 'https://picsum.photos/400/200',
        likes_number : 100, 
    },
    {
        idpost : 2,
        author_name : 'Giucas Casella',
        author_image : 'https://picsum.photos/50/50',
        date : '1/05/2022',
        post_text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quibusdam nam, velit explicabo tempore debitis recusandae minus dignissimos vel dolore?',
        post_image : 'https://picsum.photos/400/200',
        likes_number : 150, 
    },
    {
        idpost : 3,
        author_name : 'Alfonso Emperor',
        author_image : 'https://picsum.photos/50/50',
        date : '2/18/2022',
        post_text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quibusdam nam, velit explicabo tempore debitis recusandae minus dignissimos vel dolore?',
        post_image : 'https://picsum.photos/400/200',
        likes_number : 500, 
    },
    {
        idpost : 4,
        author_name : 'Pepe Cuaron',
        author_image : 'https://picsum.photos/50/50',
        date : '3/22/2022',
        post_text : 'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam quibusdam nam, velit explicabo tempore debitis recusandae minus dignissimos vel dolore?',
        post_image : 'https://picsum.photos/400/200',
        likes_number : 1200, 
    },

]


console.log(usersPosts);

// MILESTONE 2

const postElement = document.querySelector('.posts_container')

usersPosts.forEach((post) => {
  postElement.insertAdjacentHTML('beforeend',
    ` 
    <div class="post">
    <div class="post_header">
          <div class="box_image">
              <img class="user_image" src="${post.author_image}" alt="">
          </div>
          <!-- /.user_image -->
         <div class="text_info">
          <div class="user_name"><h4>${post.author_name}</h4></div>
          <!-- /.user_name -->
          <div class="date"><p>${post.date}</p></div>
          <!-- /.date -->
         </div>
         <!-- /.text_info -->
    </div>
    <!-- /.post_header -->
    <div class="post_main">
        <p class="text_post">${post.post_text}</p>
        <img src="${post.post_image}" alt=""> 
    </div>
    <!-- /.post_main -->
    <div class="post_footer">
        <div class="likes_button">
          <i class="fa-solid fa-thumbs-up"></i>
            <a href="#">Mi piace</a>
        </div>
        <!-- /.likes_button -->
        <div class="likes_counter">
            <p>Piace a <span class="number_likes">${post.likes_number}</span> persone</p>
        </div>
        <!-- /.likes_counter -->
    </div>
    <!-- /.post_footer -->
  </div>
  <!-- /.post -->         
    `)
});