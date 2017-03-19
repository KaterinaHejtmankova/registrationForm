import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cn-register-form',
  templateUrl: './cn-register-form.component.html'
})

export class CnRegisterFormComponent {
  @Output() validation = new EventEmitter<string>();

  user = {
    username: '',
    password: '',
    repeatedPassword: ''
  };

  isValid = false;

  validationRules = {
    username: {
      minLength: 5,
      isValid: false
    },
    password: {
      minLength: 6,
      isValid: false
    },
    repeatedPassword: {
      minLength: 6,
      isValid: false
    }
  }

  validateForm(value: string, inputId: string){
    let minimalLength = this.validationRules[inputId].minLength;

    if (value === ""){
      this.validation.emit(`Please fill your ${inputId}`);
      this.validationRules[inputId].isValid = false;
      this.setValid();
    } else if (value.length < minimalLength){
      this.validation.emit(`Your ${inputId} cannot be less than ${minimalLength} characters.`);
      this.validationRules[inputId].isValid = false;
      this.setValid();
    } else if (this.specialValidationFor(inputId)) {
      this.validation.emit(`Please write your ${inputId} correctly`);
      this.validationRules[inputId].isValid = false;
      this.setValid();
    } else {
      this.validation.emit("");
      this.validationRules[inputId].isValid = true;
      this.setValid();
    }
  }

  setValid(){
    let validationRules = this.validationRules;

    if (validationRules.username.isValid && validationRules.password.isValid && validationRules.repeatedPassword.isValid){
      this.isValid = true;
    } else {
      this.isValid = false;
    }
  }


  specialValidationFor(inputId: string){
    var result;
    switch(inputId){
      case "username":
        result = !this.validateEmail(this.user.username);
        break;
      case "password":
        result = !((this.user.repeatedPassword === "") || (this.user.password === this.user.repeatedPassword));
        break;
      case "repeatedPassword":
        result = !(this.user.password === this.user.repeatedPassword);
        break;
      default:
        result = false;
    }
    return result;
  }

  validateEmail(email) {
      let regexEmail = /\S+@\S+\.\S+/;
      return regexEmail.test(email);
  }

  onSubmit(){

  }


}
