import { CurrencyPipe } from "@angular/common";
import { Component, Input, input } from "@angular/core";

@Component({
  selector: "app-investment-results",
  standalone: true,
  imports: [CurrencyPipe],
  templateUrl: "./investment-results.component.html",
  styleUrl: "./investment-results.component.css",
})
export class InvestmentResultsComponent {
  //**USANDO SIGNALS LO AGREGAMOS EN MINUSUCLAS EL input CÓMO UNA FUNCUIÓN */
  // results = input<{
  //   year: number;
  //   interest: number;
  //   valueEndOfYear: number;
  //   annualInvestment: number;
  //   totalInterest: number;
  //   totalAmountInvested: number;
  // }>();

  @Input() results?: {
    year: number;
    interest: number;
    valueEndOfYear: number;
    annualInvestment: number;
    totalInterest: number;
    totalAmountInvested: number;
  }[];
}
