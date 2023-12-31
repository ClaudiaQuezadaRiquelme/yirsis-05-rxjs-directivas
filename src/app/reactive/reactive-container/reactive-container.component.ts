import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, interval, filter, take, map, Subscription, fromEvent } from 'rxjs';

@Component({
  selector: 'app-reactive-container',
  templateUrl: './reactive-container.component.html',
  styleUrls: ['./reactive-container.component.css']
})
export class ReactiveContainerComponent implements OnInit, OnDestroy {

  numSubscribeDeprecado: number = 0;
  errorSubscribeDeprecado: string = '';
  completeSubscribeDeprecado: string = '';
  completarSD: boolean = false;
  errorSD: boolean = false;
  reiniciarSD: boolean = false;

  numSubscribeActual: number = 0;
  errorSubscribeActual: string = '';
  completeSubscribeActual: string = '';
  completarSA: boolean = false;
  errorSA: boolean = false;
  reiniciarSA: boolean = false;

  myInterval: Observable<number> = interval(1500);
  myActualInterval: number = 0;
  myActualIntervalPipeFilter: number = 0;
  myActualIntervalPipeTakeFilter: number = 0;
  myActualIntervalPipeFilterTake: number = 0;
  myActualIntervalPipeMapFilterTake: number = 0;
  myActualIntervalPipeMapFilterTakeMsge: string = '';

  myIntervalSubscription: Subscription | null = null; // para capturar la subscripción y aplicar unsubscribe
  miObservableDeprecadoSubscription: Subscription | null = null; // para capturar la subscripción y aplicar unsubscribe
  miObservableActualSubscription: Subscription | null = null; // para capturar la subscripción y aplicar unsubscribe

  x: number = 0;
  y: number = 0;
  eventObs: Subscription | null = null;

  constructor() {
    this.executeMiObservableDeprecado();
    this.executeMiObservableActual();
  }

  ngOnInit(): void {
    // Se recomienda integrar el pipe en el observable en lugar de en el subscribe por motivos de legibilidad,
    // pero el resultado es el mismo.

    this.myIntervalSubscription = this.myInterval.subscribe(value => {
      this.myActualInterval = value; // se enviarán todos los números
    });
    this.myInterval.pipe(filter(value => value % 2 === 0)).subscribe(value => {
      this.myActualIntervalPipeFilter = value; // se enviarán números pares
    });
    this.myInterval
      .pipe(
        take(4),
        filter(value => value % 2 === 0)
      ).subscribe(value => {
      this.myActualIntervalPipeTakeFilter = value; // limitar la ejecución del intervalo
    });
    this.myInterval
      .pipe(
        filter(value => value % 2 === 0),
        take(4)
      ).subscribe(value => {
      this.myActualIntervalPipeFilterTake = value; // limitar la ejecución del intervalo
    });
    const count: number = 5;
    this.myInterval
      .pipe(
        map(value => value+1),
        filter(value => value % 2 === 0),
        take(count)
      )
      .subscribe({
        next: value => {
          this.myActualIntervalPipeMapFilterTake = value;
        },
        complete: ()=> {
          this.myActualIntervalPipeMapFilterTakeMsge = `Estos son los primeros ${count} números pares.`
        }
      });

    const obs = fromEvent<MouseEvent>(document.querySelector('#area')!, 'mousemove');
    this. eventObs = obs.subscribe(event => {
      this.x = event.clientX;
      this.y = event.clientY;
    });
  }

  ngOnDestroy() {
    console.log('Componente destruído');
    this.myIntervalSubscription!.unsubscribe();
    this.miObservableDeprecadoSubscription!.unsubscribe();
    this.miObservableActualSubscription!.unsubscribe();
    this.eventObs!.unsubscribe();
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

    this.miObservableDeprecadoSubscription = miObservableDeprecado.subscribe(
      (result)=> {
        this.numSubscribeDeprecado = result;
      },
      (error) => {
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

  executeMiObservableActual() {
    const miObservableActual = new Observable<number>((observer)=> {
      let numObservableActual = 0;
      setInterval(()=> {
        if (this.reiniciarSA) {
          numObservableActual = 0;
          this.reiniciarSA = false;
        }
        numObservableActual++;
        observer.next(numObservableActual);
        
        if (this.completarSA) {
          observer.complete();
        }
        if (this.errorSA) {
          observer.error('Número erróneo.');
        }
      }, 1500);
    });

    this.miObservableActualSubscription = miObservableActual.subscribe({
      next: (result)=> {
        this.numSubscribeActual = result;
      },
      error: (error)=> {
        this.errorSubscribeActual = error;
      },
      complete: ()=> {
        this.completeSubscribeActual = `Completado con num: ${this.numSubscribeActual}`;
      }
    });
  }

  variablesSubscribeActualReiniciar() {
    this.completarSA = false;
    this.errorSA = false;
    this.errorSubscribeActual = '';
    this.completeSubscribeActual = '';
  }

  reiniciarSubscribeActual() {
    this.reiniciarSA = true;
    if (this.errorSA || this.completarSA) { // executeAgainSA
      this.numSubscribeActual = 0;
      this.reiniciarSA = false;
      this.variablesSubscribeActualReiniciar();
      this.executeMiObservableActual();
    }
  }

  toCompleteSubscribeActual() {
    this.completarSA = true;
  }

  toErrorSubscribeActual() {
    this.errorSA = true;
  }
}
