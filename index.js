import { Observable } from 'rxjs';



// CREATEUR DE l'OBSERVABLE
const observable = new Observable(obs => {
  // TODAY
  let article = 'Il était une fois';
  obs.next(article);

  // TOMORROW
  setTimeout(() => {
    let article = 'Biographie générale';
    obs.next(article);
  }, 2000);

  // 4 DAYS
  setTimeout(() => {
    obs.next('Plus d\'articles!');
    obs.complete();
  }, 3000);
});




// UTILISATEUR DE L'OBSERVABLE
const observer = {
  next: (article) => console.log(article),
  error: (error) => console.log("error invoked"),
  complete: () => console.log("complete invoked"),
};

observable.subscribe({
  next: article => console.log(article),
  error: errorReceived => console.error('[DWAPS ERROR] -->', errorReceived)
});