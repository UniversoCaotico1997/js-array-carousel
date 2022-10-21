// Consegna:
// Dato un array contenente una lista di cinque immagini, creare un carosello come nello screenshot allegato.
// MILESTONE 1
// Per prima cosa, creiamo il markup statico: costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.
// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal. Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile. Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.
// MILESTONE 3
// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
// BONUS 1:
// Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.
// BONUS 2:
// Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva, come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva, che invece avrà un bordo colorato. Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.
// Prima di partire a scrivere codice: Non lasciamoci spaventare dalla complessità apparente dell'esercizio, ma analizziamo prima, come abbiamo fatto sempre, cosa ci potrebbe aspettare. Abbiamo completato ormai da qualche giorno la sessione HTML e CSS, se non ci ricordiamo qualcosa andiamo pure a riguardare alcuni argomenti. Non dedichiamo però al ripasso più di una mezz'ora, così da non perdere di vista il focus dell'esercizio.
// Consigli del giorno:
// Costruiamo del carosello una versione statica contenente solamente un'immagine.  Di questa versione statica al momento opportuno commenteremo (oscureremo) alcuni elementi per poterli riprodurre dinamicamente in js. Potremo quindi usarli come "template".
// Scriviamo sempre prima per punti il nostro algoritmo in italiano per capire cosa vogliamo fare
// Al momento giusto (:faccia_pensosa: starà a voi capire quale) rispondete a questa domanda: "Quanti cicli servono?"


const slides = [
    "./assets/img/01.webp",
    "./assets/img/02.webp",
    "./assets/img/03.webp",
    "./assets/img/04.webp",
    "./assets/img/05.webp",
  ];
  
  
  // Selezione elementi della DOM 
  //inserire le immagini .slides usando querySelector()
  const slidesElement = document.querySelector('.slides'); 
  // la freccia next
  const nextElement = document.querySelector('.next'); 
  // la freccia prev
  const prevElement = document.querySelector('.prev'); 
  
  
  // Seleziono l'indice dell'immagine che voglio attivare
  let activeImage = 0;
  
  
  
  
  // inseriamo tutte le immagini dinamicamente servendoci dell 'array fornito
  
  for (let i = 0; i < slides.length; i++) {
    const slideUrl = slides[i];
    //console.log(slideUrl);
    const imgMarkup = `<img class="img-fluid ${i === activeImage ? 'active' : ''}" src="${slideUrl}" alt= "">`;
    //prendo l'elemento della dom dove inserire le imamgini le inserisco
    slidesElement.insertAdjacentHTML('beforeend', imgMarkup);
  }
  
  /* 
  MILESTONE 3
  Al click dell 'utente sulle frecce, il programma cambierà l’immagine attiva, che quindi verrà visualizzata al posto della precedente.
  */
  
  
  // aggiungo event listener sulla freccia del next
  nextElement.addEventListener('click', function () {
    console.log('Ho cliccato su next');
  
    //cambierà l’immagine attiva
    // selezionare dalla dom l'immagine attualmente attiva
    const activeSlideElement = document.querySelector('.slides > img.active')
    console.log(slides[activeImage], 'Selene');
  
    console.log(activeSlideElement);
    // tolgo all'immagine la classe active
    activeSlideElement.classList.remove('active');
    // incremento active image di 1
    activeImage++ // activeImage = activeImage + 1
    console.log(activeImage); // al primo click il valore da 0 diventa 1
    // seleziono tutte le immagini
    const allSlides = document.getElementsByClassName('img-fluid')
    // sleziono l'immagine successiva
    const nextSlideElement = allSlides[activeImage];
    // aggiungo alla slide successiva la class active
    nextSlideElement.classList.add('active')
  
  });
  
  
  // aggiungo event listener sulla freccia del prev
  prevElement.addEventListener('click', function () {
    console.log('Ho cliccato su prev');
    //cambierà l’immagine attiva
    // selezionare dalla dom l'immagine attualmente attiva
    const activeSlideElement = document.querySelector('.slides > img.active')
    console.log(activeSlideElement);
    // tolgo all'immagine la classe active
    activeSlideElement.classList.remove('active');
    // incremento active image di 1
    activeImage-- // activeImage = activeImage + 1
    console.log(activeImage); // al primo click il valore da 0 diventa 1
    // seleziono tutte le immagini
    const allSlides = document.getElementsByClassName('img-fluid')
    // sleziono l'immagine successiva
    const nextSlideElement = allSlides[activeImage];
    // aggiungo alla slide successiva la class active
    nextSlideElement.classList.add('active')
  });