/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CnRegisterFormComponent } from './cn-register-form/cn-register-form.component';
import { FormGroup, FormsModule} from '@angular/forms';
import { CnRegisterFormComponent } from './cn-register-form/cn-register-form.component';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

describe('Component: AppComponent', () => {
    let component: AppComponent;

    beforeEach(() => {
       TestBed.configureTestingModule({
           declarations: [AppComponent, CnRegisterFormComponent],
           imports: [ BrowserModule, FormsModule, HttpModule],
           bootstrap: [AppComponent]
       });

       const fixture = TestBed.createComponent(AppComponent);
       component = fixture.componentInstance;
   });

   it('should have a defined  App component', () => {
    expect(component).toBeDefined();
    expect(component).toBeTruthy();
});

it(`should have as title 'Registration form'`, () => {
  expect(component.title).toEqual('Registration form');
});

});
