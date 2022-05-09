import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-simple-interest',
  templateUrl: './simple-interest.page.html',
  styleUrls: ['./simple-interest.page.scss'],
})
export class SimpleInterestPage {

  form: FormGroup = new FormGroup({
    initialValue: new FormControl('', [ Validators.required ]),
    interestRates: new FormControl('', [ Validators.required ]),
    timeCourse: new FormControl('', [ Validators.required ]),
  });

  results = [
    {
      title: 'Valor total investido',
      value: 1,
    },
    {
      title: 'Valor total final',
      value: 1,
    },
    {
      title: 'Valor total em juros',
      value: 1,
    }
  ];

  showResults = false;

  constructor() { }

  calculate() {
    const { initialValue, interestRates, timeCourse } =  this.form.value;
    const fees = initialValue * (interestRates / 100) * timeCourse;
    this.results[0].value = initialValue;
    this.results[1].value = initialValue + fees;
    this.results[2].value = fees;
    this.showResults = true;
  }
}
