import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-compound-interest',
  templateUrl: './compound-interest.page.html',
  styleUrls: ['./compound-interest.page.scss'],
})
export class CompoundInterestPage {

  form: FormGroup = new FormGroup({
    initialValue: new FormControl('', [ Validators.required ]),
    interestRates: new FormControl('', [ Validators.required ]),
    interestPeriodType: new FormControl('0', [ Validators.required ]),
    timeCourse: new FormControl('', [ Validators.required ]),
    timeCourseType: new FormControl('0', [ Validators.required ])
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
    const { initialValue, interestRates, interestPeriodType, timeCourse, timeCourseType } =  this.form.value;
    let interestPeriod = 0;

    if(interestPeriodType === timeCourseType) {
      interestPeriod = timeCourse;
    }else if(interestPeriodType === '1' && timeCourseType === '0') {
      interestPeriod = timeCourse / 12; 
    }else if(interestPeriodType === '0' && timeCourseType === '1') {
      interestPeriod = timeCourse * 12;
    }

    const fees = Math.pow(1 + (interestRates / 100), interestPeriod);
    const finalTotalValue = initialValue * fees;

    this.results[0].value = initialValue;
    this.results[1].value = finalTotalValue;
    this.results[2].value = finalTotalValue - initialValue;
    this.showResults = true;
  }
}
