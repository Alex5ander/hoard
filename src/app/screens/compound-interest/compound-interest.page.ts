import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-compound-interest',
  templateUrl: './compound-interest.page.html',
  styleUrls: ['./compound-interest.page.scss'],
})
export class CompoundInterestPage implements AfterViewInit {

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
  @ViewChild("chart") private  canvas: ElementRef;
  chart: Chart = null;

  constructor() {
  }

  ngAfterViewInit(){
    this.chart = new Chart(this.canvas.nativeElement, {
      type: 'bar',
      data: {
        labels: [],
        datasets: []
      },
      options: {
        responsive: true,
        scales: {
          x: { stacked: true },
          y: { stacked: true }
        }
      }
    });
  }

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

    const totalInterest = Math.pow(1 + (interestRates / 100), interestPeriod);
    const finalTotalValue = initialValue * totalInterest;

    this.results[0].value = initialValue;
    this.results[1].value = finalTotalValue;
    this.results[2].value = finalTotalValue - initialValue;
    this.showResults = true;

    const months = [
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    ];
    const monthsLabel = [];
    const values = [];
    const fees = [];
    const m = timeCourseType === '0' ? timeCourse : timeCourse * 12;
    console.log(m)
    for(let i = 0; i < m; i++) {
      monthsLabel.push(months[i % 12]);
      values.push(initialValue.toFixed(2));

      if(timeCourseType === '0') {
        fees.push((initialValue * Math.pow(1 + (interestRates / 100), i+1) - initialValue).toFixed(2));
      }else if(timeCourseType === '1') {
        fees.push((totalInterest - totalInterest / (i+1)).toFixed(2));
      }
    }
    this.chart.data = {
      labels: monthsLabel,
      datasets: [
        {
          label: 'Valor investido',
          data: values,
          backgroundColor: ['rgb(54, 162, 235)'],
        },
        {
          label: 'Total em juros',
          data: fees,
          backgroundColor: ['rgb(54, 235, 162)'],
        }
      ]
    };

    this.chart.update();
  }
}
