import { Component, EventEmitter, Output } from "@angular/core";

import { FormsModule } from "@angular/forms";

@Component({
  selector: "app-user-input",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./user-input.component.html",
  styleUrl: "./user-input.component.css",
})
export class UserInputComponent {
  @Output() calculate = new EventEmitter<{
    initialInvestment: number;
    duration: number;
    expectedReturn: number;
    annualInvestment: number;
  }>();

  //variables declaradas para que el usuario edite
  enteredInitialInvestment = "0";
  enteredAnualInvestment = "0";
  enteredExpectedResult = "5";
  enteredDuration = "10";

  onSubmit() {
    console.log("SUBMITTED");
    this.calculate.emit({
      initialInvestment: +this.enteredAnualInvestment, //para transformar un string a un number en angular debemos de agregar solamente un signo de + antes de la variable
      duration: +this.enteredDuration,
      expectedReturn: +this.enteredExpectedResult,
      annualInvestment: +this.enteredAnualInvestment,
    });
  }
}
