import { Component } from '@angular/core';

@Component({
  selector: 'cn-app',
  templateUrl: './app.component.html'
})

export class AppComponent {
  title = 'Registration form';
  validationMessage;

  validate(value: string){
    this.validationMessage = value;
  }
}
