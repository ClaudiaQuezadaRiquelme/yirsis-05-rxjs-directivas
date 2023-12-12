import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  visible: boolean = true;
  destroyMsje: string = 'Componente destruído. Se aplica unsubscribe().'

  setVisible() {
    this.visible = !this.visible;
  }
}
