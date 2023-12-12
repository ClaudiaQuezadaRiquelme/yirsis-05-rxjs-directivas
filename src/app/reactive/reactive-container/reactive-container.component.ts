import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-reactive-container',
  templateUrl: './reactive-container.component.html',
  styleUrls: ['./reactive-container.component.css']
})
export class ReactiveContainerComponent implements OnInit {

  numSubscribeDeprecado: number = 0;
  errorSubscribeDeprecado: string = '';
  completeSubscribeDeprecado: string = '';
  completarSD: boolean = false;
  errorSD: boolean = false;
  reiniciarSD: boolean = false;

  num: number = 0;
  error: string = '';
  complete: string = '';

  constructor() {
    this.executeMiObservableDeprecado();
    


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

  executeMiObservableDeprecado() {
    const miObservableDeprecado = new Observable<number>((observer)=> {
      let numObservableDeprecado = 0;
      setInterval(()=> {
        if (this.reiniciarSD) {
          numObservableDeprecado = 0;
          this.reiniciarSD = false;
        }
        numObservableDeprecado++;
        observer.next(numObservableDeprecado);
        
        if (this.completarSD) {
          observer.complete();
        }
        if (this.errorSD) {
          observer.error('Número erróneo.');
        }
      }, 1500);
    });

    miObservableDeprecado.subscribe(
      (result)=> {
        this.numSubscribeDeprecado = result;
      },
      (error) => {
        console.log('error:', error);
        
        this.errorSubscribeDeprecado = error;
      },
      () => { // complete
        this.completeSubscribeDeprecado = `Completado con num: ${this.numSubscribeDeprecado}`;
      }
    );

  }

  variablesSubscribeDeprecadoReiniciar() {
    this.completarSD = false;
    this.errorSD = false;
    this.errorSubscribeDeprecado = '';
    this.completeSubscribeDeprecado = '';
  }

  reiniciarSubscribeDeprecado() {
    this.reiniciarSD = true;
    if (this.errorSD || this.completarSD) { // executeAgainSD
      this.numSubscribeDeprecado = 0;
      this.reiniciarSD = false;
      this.variablesSubscribeDeprecadoReiniciar();
      this.executeMiObservableDeprecado();
    }
  }

  toCompleteSubscribeDeprecado() {
    this.completarSD = true;
  }

  toErrorSubscribeDeprecado() {
    this.errorSD = true;
  }
}
