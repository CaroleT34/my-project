import { Observable } from 'rxjs';

const observable = new Observable((observer) => {
  const friends = ['coco', 'jaco', 'pedro'];
  
  setTimeout(() => {
    observer.next(friends);
    observer.error('Oups I did it again')

    setTimeout(() => {
      observer.next(true);
    }, 2000);
  }, 2000);
});

// observable.subscribe(
//   (data) => console.log(data)
// );
const sub = observable.subscribe(console.log);

setTimeout(() => {
  sub.unsubscribe();
}, 10000);