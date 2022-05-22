import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-simple-interest',
  templateUrl: './simple-interest.page.html',
  styleUrls: ['./simple-interest.page.scss'],
})
export class SimpleInterestPage implements AfterViewInit {

  form: FormGroup = new FormGroup({
    initialValue: new FormControl('', [ Validators.required ]),
    interestRates: new FormControl('', [ Validators.required ]),
    timeCourse: new FormControl('', [ Validators.required ]),
  });

  results = [
    {
      title: 'Valor investido',
      value: 1,
    },
    {
      title: 'Valor final acumulado',
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

  constructor() { }

  ngAfterViewInit() {
    console.log(this.canvas);
  }
  
  calculate() {
    const { initialValue, interestRates, timeCourse } =  this.form.value;
    const totalInterest = initialValue * (interestRates / 100) * timeCourse;
    this.results[0].value = initialValue;
    this.results[1].value = initialValue + totalInterest;
    this.results[2].value = totalInterest;
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
    for(let i = 0; i < timeCourse; i++) {
      monthsLabel.push(months[i % 12]);
      values.push(initialValue);
      fees.push(initialValue * (interestRates / 100) * i);
    }
    this.chart = new Chart(this.canvas.nativeElement, {
      type: 'bar',
      data: {
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
      },
      options:{
        responsive: true,
        scales: {
          x: {
            stacked: true,
          },
          y: {
            stacked: true
          }
        }
      }
    });
  }
}
