import { Component, EventEmitter, output, Output, signal } from "@angular/core";

import { FormsModule } from "@angular/forms";
import { InvestmentInput } from "../investment-input.model";

@Component({
  selector: "app-user-input",
  standalone: true,
  imports: [FormsModule],
  templateUrl: "./user-input.component.html",
  styleUrl: "./user-input.component.css",
})
export class UserInputComponent {
  calculate = output<InvestmentInput>();

  //variables declaradas para que el usuario edite
  enteredInitialInvestment = signal("0");
  enteredAnualInvestment = signal("0");
  enteredExpectedResult = signal("5");
  enteredDuration = signal("10");

  onSubmit() {
    console.log("SUBMITTED");
    this.calculate.emit({
      initialInvestment: +this.enteredAnualInvestment(), //para transformar un string a un number en angular debemos de agregar solamente un signo de + antes de la variable
      duration: +this.enteredDuration(),
      expectedReturn: +this.enteredExpectedResult(),
      annualInvestment: +this.enteredAnualInvestment(),
    });

    this.enteredInitialInvestment.set("0");
    this.enteredAnualInvestment.set("0");
    this.enteredExpectedResult.set("5");
    this.enteredDuration.set("10");
  }
}
