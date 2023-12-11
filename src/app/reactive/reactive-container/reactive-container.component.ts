import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-container',
  templateUrl: './reactive-container.component.html',
  styleUrls: ['./reactive-container.component.css']
})
export class ReactiveContainerComponent implements OnInit {
  num: number = 0;
  error: string = '';
  complete: string = '';

  constructor() {
    const miObservable = new Observable<number>((observer)=> {
      let numObservable = 0;
      setInterval(()=> {
        numObservable++;
        observer.next(numObservable);
        observer.complete();
        if (numObservable === 3) {
          observer.error('Número erróneo.');
        }
      }, 2000);
    });

    miObservable.subscribe(
      (result)=> {
        this.num = result;
      },
      (error) => {
        console.log('error:', error);
        
        this.error = error;
      },
      () => { // complete
        this.complete = `Completado con num: ${this.num}`;
      }
    );
  }

  ngOnInit(): void {
      
  }
}
