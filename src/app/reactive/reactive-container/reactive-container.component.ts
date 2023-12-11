import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-container',
  templateUrl: './reactive-container.component.html',
  styleUrls: ['./reactive-container.component.css']
})
export class ReactiveContainerComponent implements OnInit {
  num: number = 0;

  constructor() {
    const miObservable = new Observable<number>((observer)=> {
      let numObservable = 0;
      setInterval(()=> {
        numObservable++;
        observer.next(numObservable);   
      }, 1500);
    });

    miObservable.subscribe((result)=> {
      this.num = result;
    });
  }

  ngOnInit(): void {
      
  }
}
