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
      value: 0,
    },
    {
      title: 'Valor final acumulado',
      value: 0,
    },
    {
      title: 'Valor total em juros',
      value: 0,
    }
  ];

  showResults = false;

  @ViewChild("chart") private  canvas: ElementRef;
  chart: Chart = null;

  constructor() {
   }

  ngAfterViewInit() {
    this.chart = new Chart(this.canvas.nativeElement, {
      type: 'pie',
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
    const { initialValue, interestRates, timeCourse } =  this.form.value;
    const totalInterest = initialValue * (interestRates / 100) * timeCourse;
    this.results[0].value = initialValue;
    this.results[1].value = initialValue + totalInterest;
    this.results[2].value = totalInterest;
    this.showResults = true;

    this.chart.data = {
      labels: ['Valor investido', 'Total em juros'],
      datasets: [
        {
          data: [initialValue, totalInterest],
          backgroundColor: ['rgb(54, 162, 235)', 'rgb(54, 235, 162)'],
        }
      ]
    };

    this.chart.update();
  }
}
