import { Component, EventEmitter, Output } from '@angular/core';

import { FormsModule } from '@angular/forms'

@Component({
  selector: 'app-user-input',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent {

  @Output() calculate = new EventEmitter<{
    initialInvestment : number,
    duration          : number,
    expectedReturn    : number,
    annualInvestment  : number
  }>();

  enteredInitialInvestment = '0';
  enteredAnualInvestment = '0';
  enteredExpectedResult = '5';
  enteredDuration = '10';

  onSubmit() {
    console.log("SUBMITTED")
  }

}
