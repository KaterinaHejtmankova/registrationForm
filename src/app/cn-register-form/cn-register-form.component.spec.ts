/* tslint:disable:no-unused-variable */

import { TestBed, async, fakeAsync } from '@angular/core/testing';
import { CnRegisterFormComponent } from './cn-register-form.component';
import { FormGroup, FormsModule} from '@angular/forms';

describe('Component: CnRegisterFormComponent', () => {
    let component: CnRegisterFormComponent;
    let nativeElement;

    beforeEach(() => {
       TestBed.configureTestingModule({
           declarations: [CnRegisterFormComponent],
           imports: [ FormsModule]
       });

       const fixture = TestBed.createComponent(CnRegisterFormComponent);
       component = fixture.componentInstance;
       nativeElement = fixture.nativeElement;
       fixture.detectChanges();
   });

   describe('on initialization', () => {

      it('should have a defined CnRegisterFormComponent', () => {
        expect(component).toBeDefined();
        expect(component).toBeTruthy();
      });

      it(`should have as isValid property equal to false`, () => {
        expect(component.isValid).toEqual(false);
      });

      it(`should have as user object with its empty properties`, () => {
        expect(component.user.username).toEqual("");
        expect(component.user.password).toEqual("");
        expect(component.user.repeatedPassword).toEqual("");
      });

      it(`should have as validationRules object with its properties`, () => {
        expect(component.validationRules.username.minLength).toEqual(5);
        expect(component.validationRules.password.minLength).toEqual(6);
        expect(component.validationRules.repeatedPassword.minLength).toEqual(6);
        expect(component.validationRules.username.isValid).toEqual(false);
        expect(component.validationRules.password.isValid).toEqual(false);
        expect(component.validationRules.repeatedPassword.isValid).toEqual(false);
      });

      it(`should have form with username, password and repeated password and register button`, () =>{
        expect(nativeElement.querySelector('input#username') === null).toBe(false);
        expect(nativeElement.querySelector('input#password') === null).toBe(false);
        expect(nativeElement.querySelector('input#repeatedPassword') === null).toBe(false);
        expect(nativeElement.querySelector('label#username').innerHTML).toContain('Username:');
        expect(nativeElement.querySelector('label#password').innerHTML).toContain('Password:');
        expect(nativeElement.querySelector('label#repeatedPassword').innerHTML).toContain('Repeat password:');
        expect(nativeElement.querySelector('button').innerHTML).toContain('Register');
      });

});

});
